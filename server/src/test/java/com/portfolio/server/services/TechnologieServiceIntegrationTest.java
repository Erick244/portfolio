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

import com.portfolio.server.models.dto.technologie.SaveTechnologieDto;
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
	void testSave() {
		// Arrange
		authenticateAdmin();
		SaveTechnologieDto dto = new SaveTechnologieDto("technologie", "experience", "imageUrl",
				TechnologieCategory.BACKEND, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.save(dto);

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
	void testSave_NameNull() {
		// Arrange
		authenticateAdmin();
		SaveTechnologieDto dto = new SaveTechnologieDto(null, "experience", "imageUrl",
				TechnologieCategory.BACKEND, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The name cannot be null.");
	}

	@Test
	void testSave_ExperienceNull() {
		// Arrange
		authenticateAdmin();
		SaveTechnologieDto dto = new SaveTechnologieDto("name", null, "imageUrl",
				TechnologieCategory.BACKEND, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The experience cannot be null.");
	}

	@Test
	void testSave_ImageUrlNull() {
		// Arrange
		authenticateAdmin();
		SaveTechnologieDto dto = new SaveTechnologieDto("name", "experience", null,
				TechnologieCategory.BACKEND, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The imageUrl cannot be null.");
	}

	@Test
	void testSave_CategoryNull() {
		// Arrange
		authenticateAdmin();
		SaveTechnologieDto dto = new SaveTechnologieDto("name", "experience", "imageUrl",
				null, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The category cannot be null.");
	}

	@Test
	void testSave_AboutNull() {
		// Arrange
		authenticateAdmin();
		SaveTechnologieDto dto = new SaveTechnologieDto("name", "experience", "imageUrl",
				TechnologieCategory.BACKEND, null, "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The about cannot be null.");
	}

	@Test
	void testSave_AboutLessThan3Characters() {
		// Arrange
		authenticateAdmin();
		SaveTechnologieDto dto = new SaveTechnologieDto("name", "experience", "imageUrl",
				TechnologieCategory.BACKEND, "ab", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The about must be between 3 and 150 characters long.");
	}

	@Test
	void testSave_AboutMoreThan150Characters() {
		// Arrange
		authenticateAdmin();
		String about = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
		SaveTechnologieDto dto = new SaveTechnologieDto("name", "experience", "imageUrl",
				TechnologieCategory.BACKEND, about, "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologieService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The about must be between 3 and 150 characters long.");
	}

	@Test
	void testSave_ColorNull() {
		// Arrange
		authenticateAdmin();
		SaveTechnologieDto dto = new SaveTechnologieDto("name", "experience", "imageUrl",
				TechnologieCategory.BACKEND, "about", null);

		// Act
		ResponseEntity<?> resp = technologieService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The color cannot be null.");
	}

	@Test
	void testSave_AllNull() {
		// Arrange
		authenticateAdmin();
		SaveTechnologieDto dto = new SaveTechnologieDto(null, null,
				null,
				null, null, null);

		// Act
		ResponseEntity<?> resp = technologieService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
	}

	@Test
	void testSave_EditTechnologie() {
		// Arrange
		Admin admin = authenticateAdmin();
		technologieRepository.save(
				new Technologie("name", "experience", "imageUrl",
						TechnologieCategory.BACKEND, "about", "#FFFFFF", admin));

		SaveTechnologieDto dto = new SaveTechnologieDto(
				"name", "2 years",
				"imageUrl",
				TechnologieCategory.BACKEND, "about", "#00000");

		// Act
		ResponseEntity<?> resp = technologieService.save(dto);

		// Assert
		Technologie technologieEdited = technologieRepository.findByName("name").orElse(null);

		assertEquals(resp.getStatusCode().value(), 200);
		assertNotNull(technologieEdited);
		assertEquals(technologieEdited.getExperience(), dto.experience());
	}

	@SuppressWarnings("unchecked")
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

	@SuppressWarnings("unchecked")
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

	@SuppressWarnings("unchecked")
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

	@Test
	void testCount() {
		// Arrange
		seedDataBase(10);

		// Act
		ResponseEntity<?> resp = technologieService.count();

		// Assert
		assertEquals(resp.getStatusCode().value(), 200);
		assertEquals(resp.getBody(), 10L);
	}

	@SuppressWarnings({ "unchecked", "null" })
	@Test
	void testFindAllByCategory() {
		// Arrange
		seedDataBase(10);

		// Act
		ResponseEntity<?> resp = technologieService.findAllByCategory(TechnologieCategory.FRONTEND);

		// Assert
		List<Technologie> technologies = (List<Technologie>) resp.getBody();
		assertEquals(resp.getStatusCode().value(), 200);
		assertEquals(technologies.size(), 0);
	}

	@Test
	void testDelete() {
		// Arrange
		seedDataBase(2);
		int technologieId = 1;

		// Act
		ResponseEntity<?> resp = technologieService.delete(technologieId);

		// Assert
		long count = technologieRepository.count();
		assertEquals(resp.getStatusCode().value(), 200);
		assertEquals(count, 1l);
	}

	@Test
	void testDelete_NotFound() {
		// Arrange
		seedDataBase(10);
		int technologieId = 99;

		// Act
		ResponseEntity<?> resp = technologieService.delete(technologieId);

		// Assert
		assertEquals(resp.getStatusCode().value(), 404);
	}

}
