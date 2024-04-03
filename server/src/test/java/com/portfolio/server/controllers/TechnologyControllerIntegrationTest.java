package com.portfolio.server.controllers;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
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
import org.springframework.test.web.servlet.ResultMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.portfolio.server.models.dto.technology.SaveTechnologyDto;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.entities.Technology;
import com.portfolio.server.models.enums.TechnologyCategory;
import com.portfolio.server.models.enums.TechnologyKnowledge;
import com.portfolio.server.models.repositories.AdminRepository;
import com.portfolio.server.models.repositories.TechnologyRepository;
import com.portfolio.server.services.JwtService;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:application-test.properties")
public class TechnologyControllerIntegrationTest {

	@Autowired
	private MockMvc mvc;

	@Autowired
	private JwtService jwtService;

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private TechnologyRepository technologyRepository;

	private final ObjectMapper mapper = new ObjectMapper();

	@BeforeEach
	void setUp() {
		technologyRepository.deleteAll();
		adminRepository.deleteAll();
	}

	@Test
	void testSave() throws Exception {
		// Arrange
		SaveTechnologyDto dto = new SaveTechnologyDto("name", TechnologyKnowledge.EXPERT, "imageUrl",
				TechnologyCategory.BACKEND, "about", "#ffff");
		String jsonDto = mapper.writeValueAsString(dto);

		adminRepository.save(new Admin("username", "password"));
		String bearerToken = "Bearer " + jwtService.createToken("username");

		// Act & Assert
		mvc.perform(post("/technologies")
				.content(jsonDto)
				.contentType(MediaType.APPLICATION_JSON)
				.header("Authorization", bearerToken))
				.andExpect(status().isOk());
	}

	@Test
	void testSave_Put() throws Exception {
		// Arrange
		seedDataBase(1);
		String technologyName = "name0";
		String adminUsername = "username0";

		SaveTechnologyDto dto = new SaveTechnologyDto(
				technologyName, TechnologyKnowledge.BASIC, "imageUrl",
				TechnologyCategory.BACKEND, "about", "#ffff");
		String jsonDto = mapper.writeValueAsString(dto);

		String bearerToken = "Bearer " + jwtService.createToken(adminUsername);

		// Act & Assert
		mvc.perform(put("/technologies")
				.content(jsonDto)
				.contentType(MediaType.APPLICATION_JSON)
				.header("Authorization", bearerToken))
				.andExpect(status().isOk());
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

	@Test
	void testFindAll() throws Exception {
		// Arrange
		seedDataBase(10);

		ResultMatcher responseContentIsNotNull = jsonPath("$").isNotEmpty();
		ResultMatcher responseTechnologiesListSizeIsSame = jsonPath("$", hasSize(5));

		// Act & Assert
		mvc.perform(get("/technologies?page=0&take=5"))
				.andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(responseContentIsNotNull)
				.andExpect(responseTechnologiesListSizeIsSame);
	}

	@Test
	void testFindAll_NoPagination() throws Exception {
		// Arrange
		seedDataBase(10);

		ResultMatcher responseContentIsNotNull = jsonPath("$").isNotEmpty();
		ResultMatcher responseTechnologiesListSizeIsSame = jsonPath("$", hasSize(10));

		// Act & Assert
		mvc.perform(get("/technologies"))
				.andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(responseContentIsNotNull)
				.andExpect(responseTechnologiesListSizeIsSame);

	}

	@Test
	void testCount() throws Exception {
		// Arrange
		seedDataBase(10);

		ResultMatcher responseContentIsNotNull = jsonPath("$").isNotEmpty();
		ResultMatcher responseCountIsSame = jsonPath("$", is(10));

		// Act & Arrange
		mvc.perform(get("/technologies/count"))
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(responseContentIsNotNull)
				.andExpect(responseCountIsSame);

	}

	@Test
	void testFindAllByCategory() throws Exception {
		// Arrange
		seedDataBase(10);

		ResultMatcher responseContentIsNotNull = jsonPath("$").isNotEmpty();
		ResultMatcher responseTechnologiesSizeIsSame = jsonPath("$", hasSize(10));

		// Act
		mvc.perform(get("/technologies/findAllByCategory/{category}", TechnologyCategory.BACKEND)
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(responseContentIsNotNull)
				.andExpect(responseTechnologiesSizeIsSame);
	}

	@Test
	void testDelete() throws Exception {
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

		String bearerToken = "Bearer " + jwtService.createToken("username");

		// Act
		mvc.perform(delete("/technologies/{id}",
				id)
				.header("Authorization", bearerToken))
				.andExpect(status().isOk());
	}
}
