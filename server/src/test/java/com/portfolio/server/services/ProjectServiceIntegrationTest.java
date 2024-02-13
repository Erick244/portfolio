package com.portfolio.server.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.context.TestPropertySource;

import com.portfolio.server.models.dto.project.SaveProjectDto;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.entities.Project;
import com.portfolio.server.models.repositories.AdminRepository;
import com.portfolio.server.models.repositories.ProjectRepository;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestPropertySource(locations = "classpath:application-test.properties")
public class ProjectServiceIntegrationTest {

	@Autowired
	private ProjectService projectService;

	@Autowired
	private ProjectRepository projectRepository;

	@Autowired
	private AdminRepository adminRepository;

	@BeforeEach
	void setUp() {
		adminRepository.deleteAll();
		projectRepository.deleteAll();
	}

	@Test
	void testSave() {
		// Arrange
		authenticateAdmin();
		SaveProjectDto dto = new SaveProjectDto(
				"name",
				"imageUrl",
				"repoUrl",
				"siteUrl",
				"description",
				"#fff");

		// Act
		ResponseEntity<?> resp = projectService.save(dto);

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
	void testSave_Edit() {
		// Arrange
		Admin admin = authenticateAdmin();
		Project project = new Project(
				"name",
				"imageUrl",
				"repoUrl",
				"siteUrl",
				"description",
				"#fff",
				admin);

		projectRepository.save(project);

		SaveProjectDto dto = new SaveProjectDto(
				project.getName(),
				project.getImageUrl(),
				project.getRepoUrl(),
				project.getSiteUrl(),
				"description edited",
				project.getColor());

		// Act
		ResponseEntity<?> resp = projectService.save(dto);

		// Assert
		Project projectEdited = projectRepository.findByName("name").orElse(null);

		assertEquals(resp.getStatusCode().value(), 200);
		assertNotNull(projectEdited);
		assertEquals(projectEdited.getDescription(), dto.description());
	}

	@Test
	void testSave_NameNull() {
		// Arrange
		authenticateAdmin();
		SaveProjectDto dto = new SaveProjectDto(
				null,
				"imageUrl",
				"repoUrl",
				"siteUrl",
				"description",
				"#fff");

		// Act
		ResponseEntity<?> resp = projectService.save(dto);

		// Assert
		String errorMessage = (String) resp.getBody();

		assertEquals(resp.getStatusCode().value(), 400);
		assertNotNull(errorMessage);
		assertEquals(errorMessage, "The name cannot be null.");
	}

	@Test
	void testSave_ImageUrlNull() {
		// Arrange
		authenticateAdmin();
		SaveProjectDto dto = new SaveProjectDto(
				"name",
				null,
				"repoUrl",
				"siteUrl",
				"description",
				"#fff");

		// Act
		ResponseEntity<?> resp = projectService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 200);
	}

	@Test
	void testSave_RepoUrlNull() {
		// Arrange
		authenticateAdmin();
		SaveProjectDto dto = new SaveProjectDto(
				"name",
				"imageUrl",
				null,
				"siteUrl",
				"description",
				"#fff");

		// Act
		ResponseEntity<?> resp = projectService.save(dto);

		// Assert
		String errorMessage = (String) resp.getBody();

		assertEquals(resp.getStatusCode().value(), 400);
		assertNotNull(errorMessage);
		assertEquals(errorMessage, "The repository URL cannot be null.");
	}

	@Test
	void testSave_SiteUrlNull() {
		// Arrange
		authenticateAdmin();
		SaveProjectDto dto = new SaveProjectDto(
				"name",
				"imageUrl",
				"repoUrl",
				null,
				"description",
				"#fff");

		// Act
		ResponseEntity<?> resp = projectService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 200);
	}

	@Test
	void testSave_DescriptionNull() {
		// Arrange
		authenticateAdmin();
		SaveProjectDto dto = new SaveProjectDto(
				"name",
				"imageUrl",
				"repoUrl",
				"siteUrl",
				null,
				"#fff");

		// Act
		ResponseEntity<?> resp = projectService.save(dto);

		// Assert
		String errorMessage = (String) resp.getBody();

		assertEquals(resp.getStatusCode().value(), 400);
		assertNotNull(errorMessage);
		assertEquals(errorMessage, "The description cannot be null.");
	}

	@Test
	void testSave_DescriptionLessThan3Characters() {
		// Arrange
		authenticateAdmin();
		SaveProjectDto dto = new SaveProjectDto(
				"name",
				"imageUrl",
				"repoUrl",
				"siteUrl",
				"ab",
				"#fff");

		// Act
		ResponseEntity<?> resp = projectService.save(dto);

		// Assert
		String errorMessage = (String) resp.getBody();

		assertEquals(resp.getStatusCode().value(), 400);
		assertNotNull(errorMessage);
		assertEquals(errorMessage, "The description must be between 3 and 150 characters long.");
	}

	@Test
	void testSave_DescriptionMoreThan150Characters() {
		// Arrange
		authenticateAdmin();
		String description = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
		SaveProjectDto dto = new SaveProjectDto(
				"name",
				"imageUrl",
				"repoUrl",
				"siteUrl",
				description,
				"#fff");

		// Act
		ResponseEntity<?> resp = projectService.save(dto);

		// Assert
		String errorMessage = (String) resp.getBody();

		assertEquals(resp.getStatusCode().value(), 400);
		assertNotNull(errorMessage);
		assertEquals(errorMessage, "The description must be between 3 and 150 characters long.");
	}

	@Test
	void testSave_ColorNull() {
		// Arrange
		authenticateAdmin();
		SaveProjectDto dto = new SaveProjectDto(
				"name",
				"imageUrl",
				"repoUrl",
				"siteUrl",
				"description",
				null);

		// Act
		ResponseEntity<?> resp = projectService.save(dto);

		// Assert
		String errorMessage = (String) resp.getBody();

		assertEquals(resp.getStatusCode().value(), 400);
		assertNotNull(errorMessage);
		assertEquals(errorMessage, "The color cannot be null.");
	}

	@Test
	void testSave_() {
		// Arrange
		authenticateAdmin();
		SaveProjectDto dto = new SaveProjectDto(
				null,
				null,
				null,
				null,
				null,
				null);

		// Act
		ResponseEntity<?> resp = projectService.save(dto);

		// Assert
		String errorMessage = (String) resp.getBody();

		assertEquals(resp.getStatusCode().value(), 400);
		assertNotNull(errorMessage);
	}

}
