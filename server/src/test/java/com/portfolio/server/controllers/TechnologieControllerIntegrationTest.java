package com.portfolio.server.controllers;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
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
import com.portfolio.server.models.dto.technologie.CreateTechnologieDto;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.entities.Technologie;
import com.portfolio.server.models.enums.TechnologieCategory;
import com.portfolio.server.models.repositories.AdminRepository;
import com.portfolio.server.models.repositories.TechnologieRepository;
import com.portfolio.server.services.JwtService;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:application-test.properties")
public class TechnologieControllerIntegrationTest {

	@Autowired
	private MockMvc mvc;

	@Autowired
	private JwtService jwtService;

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private TechnologieRepository technologieRepository;

	private final ObjectMapper mapper = new ObjectMapper();

	@BeforeEach
	void setUp() {
		technologieRepository.deleteAll();
		adminRepository.deleteAll();
	}

	@SuppressWarnings("null")
	@Test
	void testCreate() throws Exception {
		// Arrange
		CreateTechnologieDto dto = new CreateTechnologieDto("name", "experience", "imageUrl",
				TechnologieCategory.BACKEND, "about", "#ffff");
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

	@SuppressWarnings("null")
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

	@SuppressWarnings("null")
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

	@SuppressWarnings("null")
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
}
