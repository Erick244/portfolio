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

import com.portfolio.server.models.dto.technology.SaveTechnologyDto;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.entities.Technology;
import com.portfolio.server.models.enums.TechnologyCategory;
import com.portfolio.server.models.enums.TechnologyKnowledge;
import com.portfolio.server.models.repositories.AdminRepository;
import com.portfolio.server.models.repositories.TechnologyRepository;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestPropertySource(locations = "classpath:application-test.properties")
public class TechnologyServiceIntegrationTest {

	@Autowired
	private TechnologyService technologyService;

	@Autowired
	private TechnologyRepository technologyRepository;

	@Autowired
	private AdminRepository adminRepository;

	@BeforeEach
	void setUp() {
		adminRepository.deleteAll();
		technologyRepository.deleteAll();
	}

	@Test
	void testSave() {
		// Arrange
		authenticateAdmin();
		SaveTechnologyDto dto = new SaveTechnologyDto("technology", TechnologyKnowledge.EXPERT, "imageUrl",
				TechnologyCategory.BACKEND, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologyService.save(dto);

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
		SaveTechnologyDto dto = new SaveTechnologyDto(null, TechnologyKnowledge.EXPERT, "imageUrl",
				TechnologyCategory.BACKEND, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologyService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The name cannot be null.");
	}

	@Test
	void testSave_knowledgeNull() {
		// Arrange
		authenticateAdmin();
		SaveTechnologyDto dto = new SaveTechnologyDto("name", null, "imageUrl",
				TechnologyCategory.BACKEND, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologyService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The knowledge cannot be null.");
	}

	@Test
	void testSave_ImageUrlNull() {
		// Arrange
		authenticateAdmin();
		SaveTechnologyDto dto = new SaveTechnologyDto("name", TechnologyKnowledge.EXPERT, null,
				TechnologyCategory.BACKEND, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologyService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The imageUrl cannot be null.");
	}

	@Test
	void testSave_ImageMoreThan255Characters() {
		// Arrange
		authenticateAdmin();
		String imageUrl256Characters = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
		SaveTechnologyDto dto = new SaveTechnologyDto("name", TechnologyKnowledge.EXPERT,
				imageUrl256Characters,
				TechnologyCategory.BACKEND, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologyService.save(dto);

		// Assert
		String errorMessage = (String) resp.getBody();

		assertEquals(resp.getStatusCode().value(), 400);
		assertNotNull(errorMessage);
		assertEquals(errorMessage, "The image URL cannot exceed 255 characters.");
	}

	@Test
	void testSave_CategoryNull() {
		// Arrange
		authenticateAdmin();
		SaveTechnologyDto dto = new SaveTechnologyDto("name", TechnologyKnowledge.EXPERT, "imageUrl",
				null, "about", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologyService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The category cannot be null.");
	}

	@Test
	void testSave_AboutNull() {
		// Arrange
		authenticateAdmin();
		SaveTechnologyDto dto = new SaveTechnologyDto("name", TechnologyKnowledge.EXPERT, "imageUrl",
				TechnologyCategory.BACKEND, null, "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologyService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The about cannot be null.");
	}

	@Test
	void testSave_AboutLessThan3Characters() {
		// Arrange
		authenticateAdmin();
		SaveTechnologyDto dto = new SaveTechnologyDto("name", TechnologyKnowledge.EXPERT, "imageUrl",
				TechnologyCategory.BACKEND, "ab", "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologyService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The about must be between 3 and 150 characters long.");
	}

	@Test
	void testSave_AboutMoreThan150Characters() {
		// Arrange
		authenticateAdmin();
		String about151Characters = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
		SaveTechnologyDto dto = new SaveTechnologyDto("name", TechnologyKnowledge.EXPERT, "imageUrl",
				TechnologyCategory.BACKEND, about151Characters, "#FFFFFF");

		// Act
		ResponseEntity<?> resp = technologyService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The about must be between 3 and 150 characters long.");
	}

	@Test
	void testSave_ColorNull() {
		// Arrange
		authenticateAdmin();
		SaveTechnologyDto dto = new SaveTechnologyDto("name", TechnologyKnowledge.EXPERT, "imageUrl",
				TechnologyCategory.BACKEND, "about", null);

		// Act
		ResponseEntity<?> resp = technologyService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
		assertEquals(resp.getBody(), "The color cannot be null.");
	}

	@Test
	void testSave_AllNull() {
		// Arrange
		authenticateAdmin();
		SaveTechnologyDto dto = new SaveTechnologyDto(null, null,
				null,
				null, null, null);

		// Act
		ResponseEntity<?> resp = technologyService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 400);
	}

	@Test
	void testSave_EditTechnology() {
		// Arrange
		Admin admin = authenticateAdmin();
		technologyRepository.save(
				new Technology("name", TechnologyKnowledge.EXPERT, "imageUrl",
						TechnologyCategory.BACKEND, "about", "#FFFFFF", admin));

		SaveTechnologyDto dto = new SaveTechnologyDto(
				"name", TechnologyKnowledge.BASIC,
				"imageUrl",
				TechnologyCategory.BACKEND, "about", "#00000");

		// Act
		ResponseEntity<?> resp = technologyService.save(dto);

		// Assert
		Technology technologyEdited = technologyRepository.findByName("name").orElse(null);

		assertEquals(resp.getStatusCode().value(), 200);
		assertNotNull(technologyEdited);
		assertEquals(technologyEdited.setKnowledge(), dto.knowledge());
	}

	@SuppressWarnings("unchecked")
	@Test
	void testFindAll() {
		// Arrange
		int take = 5;
		int page = 0;
		seedDataBase(10);

		// Act
		ResponseEntity<?> resp = technologyService.findAll(take, page);
		List<Technology> technologies = (List<Technology>) resp.getBody();

		// Assert
		assertEquals(resp.getStatusCode().value(), 200);
		assertNotNull(technologies);
		assertEquals(technologies.size(), take);
	}

	private void seedDataBase(int size) {
		for (int i = 0; i < size; i++) {
			String name = "name" + i;
			String imageUrl = "imageUrl" + i;
			String about = "about" + i;
			String color = "color" + i;
			Admin admin = adminRepository.save(new Admin("username" + i, "password" + i));

			Technology technology = new Technology(
					name,
					TechnologyKnowledge.EXPERT,
					imageUrl,
					TechnologyCategory.BACKEND,
					about,
					color,
					admin);

			technologyRepository.save(technology);
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
		ResponseEntity<?> resp = technologyService.findAll(take, page);
		List<Technology> technologies = (List<Technology>) resp.getBody();

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
		ResponseEntity<?> resp = technologyService.findAll(take, page);
		List<Technology> technologies = (List<Technology>) resp.getBody();

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
		ResponseEntity<?> resp = technologyService.count();

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
		ResponseEntity<?> resp = technologyService.findAllByCategory(TechnologyCategory.FRONTEND);

		// Assert
		List<Technology> technologies = (List<Technology>) resp.getBody();
		assertEquals(resp.getStatusCode().value(), 200);
		assertEquals(technologies.size(), 0);
	}

	@Test
	void testDelete() {
		// Arrange
		Admin admin = new Admin("username", "password");
		adminRepository.save(admin);
		technologyRepository.save(
				new Technology(
						"name",
						TechnologyKnowledge.BASIC,
						"imageUrl",
						TechnologyCategory.BACKEND,
						"about",
						"color",
						admin));

		int id = technologyRepository.findByName("name").get().getId();

		// Act
		ResponseEntity<?> resp = technologyService.delete(id);

		// Assert
		long count = technologyRepository.count();
		assertEquals(resp.getStatusCode().value(), 200);
		assertEquals(count, 0l);
	}

	@Test
	void testDelete_NotFound() {
		// Arrange
		seedDataBase(10);
		int technologyId = 99;

		// Act
		ResponseEntity<?> resp = technologyService.delete(technologyId);

		// Assert
		assertEquals(resp.getStatusCode().value(), 404);
	}

}
