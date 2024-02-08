package com.portfolio.server.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.context.TestPropertySource;

import com.portfolio.server.models.dto.technologie.CreateTechnologieDto;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.entities.Technologie;
import com.portfolio.server.models.enums.TechnologieCategory;
import com.portfolio.server.models.repositories.AdminRepository;
import com.portfolio.server.models.repositories.TechnologieRepository;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestPropertySource(locations = "classpath:application-test.properties")
public class TechnologieServiceIntegrationTest {

	@Autowired
	private TechnologieService technologieService;

	@Autowired
	private TechnologieRepository technologieRepository;

	@Autowired
	private AdminRepository adminRepository;

	@BeforeEach
	void setUp() {
		adminRepository.deleteAll();
		technologieRepository.deleteAll();
	}

	@Test
	void testCreate() {
		// Arrange
		authenticateAdmin();
		CreateTechnologieDto dto = new CreateTechnologieDto("technologie", "experience", "imageUrl",
				TechnologieCategory.BACKEND, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.create(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 200);
	}

	private Admin authenticateAdmin() {
		Admin admin = adminRepository.save(new Admin("username", "password"));
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(admin, null,
				admin.getAuthorities());
		SecurityContextHolder.getContext().setAuthentication(authToken);

		return admin;
	}

	@Test
	void testCreate_TechnologyAlreadyRegistered() {
		// Arrange
		technologieRepository.save(new Technologie("technologie", "experience", "imageUrl",
				TechnologieCategory.BACKEND, "about", "#FFFFFF", authenticateAdmin()));

		CreateTechnologieDto dto = new CreateTechnologieDto("technologie", "experience", "imageUrl",
				TechnologieCategory.BACKEND, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.create(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "A technology with the same name has already been registered.");
	}

	@Test
	void testCreate_NameNull() {
		// Arrange
		authenticateAdmin();
		CreateTechnologieDto dto = new CreateTechnologieDto(null, "experience", "imageUrl",
				TechnologieCategory.BACKEND, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.create(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The name cannot be null.");
	}

	@Test
	void testCreate_ExperienceNull() {
		// Arrange
		authenticateAdmin();
		CreateTechnologieDto dto = new CreateTechnologieDto("name", null, "imageUrl",
				TechnologieCategory.BACKEND, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.create(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The experience cannot be null.");
	}

	@Test
	void testCreate_ImageUrlNull() {
		// Arrange
		authenticateAdmin();
		CreateTechnologieDto dto = new CreateTechnologieDto("name", "experience", null,
				TechnologieCategory.BACKEND, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.create(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The imageUrl cannot be null.");
	}

	@Test
	void testCreate_CategoryNull() {
		// Arrange
		authenticateAdmin();
		CreateTechnologieDto dto = new CreateTechnologieDto("name", "experience", "imageUrl",
				null, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.create(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The category cannot be null.");
	}

	@Test
	void testCreate_AboutNull() {
		// Arrange
		authenticateAdmin();
		CreateTechnologieDto dto = new CreateTechnologieDto("name", "experience", "imageUrl",
				TechnologieCategory.BACKEND, null, "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.create(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The about cannot be null.");
	}

	@Test
	void testCreate_AboutLessThan3Characters() {
		// Arrange
		authenticateAdmin();
		CreateTechnologieDto dto = new CreateTechnologieDto("name", "experience", "imageUrl",
				TechnologieCategory.BACKEND, "ab", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.create(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The about must be between 3 and 150 characters long.");
	}

	@Test
	void testCreate_AboutMoreThan150Characters() {
		// Arrange
		authenticateAdmin();
		String about = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
		CreateTechnologieDto dto = new CreateTechnologieDto("name", "experience", "imageUrl",
				TechnologieCategory.BACKEND, about, "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.create(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The about must be between 3 and 150 characters long.");
	}

	@Test
	void testCreate_ColorNull() {
		// Arrange
		authenticateAdmin();
		CreateTechnologieDto dto = new CreateTechnologieDto("name", "experience", "imageUrl",
				TechnologieCategory.BACKEND, "about", null);

		// Act
		ResponseEntity<?> resp = technologieService.create(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The color cannot be null.");
	}

	@Test
	void testCreate_AllNull() {
		// Arrange
		authenticateAdmin();
		CreateTechnologieDto dto = new CreateTechnologieDto(null, null,
				null,
				null, null, null);

		// Act
		ResponseEntity<?> resp = technologieService.create(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		// In this case it will pick up the last error message.
		// When this error is corrected, it will pick up the last one again, and so on.
		assertEquals(resp.getBody(), "The color cannot be null.");
	}

	@Test
	void testFindAll() {
		// Arrange
		int take = 5;
		int page = 0;
		seedDataBase(10);

		// Act
		ResponseEntity<?> resp = technologieService.findAll(take, page);
		List<Technologie> technologies = (List<Technologie>) resp.getBody();

		// Assert
		assertEquals(resp.getStatusCode().value(), 200);
		assertNotNull(technologies);
		assertEquals(technologies.size(), take);
	}

	private void seedDataBase(int size) {
		for (int i = 0; i < size; i++) {
			String name = "name" + i;
			String experience = "experience" + i;
			String imageUrl = "imageUrl" + i;
			String about = "about" + i;
			String color = "color" + i;
			Admin admin = adminRepository.save(new Admin("username" + i, "password" + i));

			Technologie technologie = new Technologie(
					name,
					experience,
					imageUrl,
					TechnologieCategory.BACKEND,
					about,
					color,
					admin);

			technologieRepository.save(technologie);
		}
	}

	@Test
	void testFindAll_OtherPage() {
		// Arrange
		int take = 5;
		int page = 1;
		seedDataBase(10);

		// Act
		ResponseEntity<?> resp = technologieService.findAll(take, page);
		List<Technologie> technologies = (List<Technologie>) resp.getBody();

		// Assert
		assertEquals(resp.getStatusCode().value(), 200);
		assertNotNull(technologies);
		assertEquals(technologies.size(), take);
	}

	@Test
	void testFindAll_NoPagination() {
		// Arrange
		int take = -1;
		int page = -1;
		seedDataBase(10);

		// Act
		ResponseEntity<?> resp = technologieService.findAll(take, page);
		List<Technologie> technologies = (List<Technologie>) resp.getBody();

		// Assert
		assertEquals(resp.getStatusCode().value(), 200);
		assertNotNull(technologies);
		assertEquals(technologies.size(), 10);
	}
}
