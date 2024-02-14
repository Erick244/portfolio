package com.portfolio.server.controllers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.portfolio.server.models.dto.project.SaveProjectDto;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.entities.Project;
import com.portfolio.server.models.repositories.AdminRepository;
import com.portfolio.server.models.repositories.ProjectRepository;
import com.portfolio.server.services.JwtService;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:application-test.properties")
public class ProjectControllerIntegrationTest {

	@Autowired
	private MockMvc mvc;

	@Autowired
	private JwtService jwtService;

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private ProjectRepository projectRepository;

	private final ObjectMapper mapper = new ObjectMapper();

	@BeforeEach
	void setUp() {
		adminRepository.deleteAll();
		projectRepository.deleteAll();
	}

	@SuppressWarnings("null")
	@Test
	void testSave() throws Exception {
		// Arrange
		SaveProjectDto dto = new SaveProjectDto("name", null, "repoUrl", null, "description", "#fff");
		String jsonDto = mapper.writeValueAsString(dto);

		adminRepository.save(new Admin("username", "password"));
		String bearerToken = "Bearer " + jwtService.createToken("username");

		// Act & Assert
		mvc.perform(post("/projects")
				.contentType(MediaType.APPLICATION_JSON)
				.content(jsonDto)
				.header("Authorization", bearerToken))
				.andExpect(status().isOk());
	}

	@SuppressWarnings("null")
	@Test
	void testSave_Put() throws Exception {
		// Arrange
		seedDataBase(1);
		String projectName = "name0";
		String adminUsername = "username0";

		SaveProjectDto dto = new SaveProjectDto(projectName, null, "repoUrl", null, "description", "#fff");
		String jsonDto = mapper.writeValueAsString(dto);

		String bearerToken = "Bearer " + jwtService.createToken(adminUsername);

		// Act & Assert
		mvc.perform(put("/projects")
				.contentType(MediaType.APPLICATION_JSON)
				.content(jsonDto)
				.header("Authorization", bearerToken))
				.andExpect(status().isOk());
	}

	private void seedDataBase(int size) {
		for (int i = 0; i < size; i++) {
			String name = "name" + i;
			String imageUrl = "imageUrl" + i;
			String description = "description" + i;
			String color = "color" + i;
			String repoUrl = "repoUrl" + i;
			String siteUrl = "siteUrl" + i;
			Admin admin = adminRepository.save(new Admin("username" + i, "password" + i));

			Project project = new Project(
					name,
					imageUrl,
					repoUrl,
					siteUrl,
					description,
					color,
					admin);

			projectRepository.save(project);
		}
	}
}
