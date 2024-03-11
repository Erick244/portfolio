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
import com.portfolio.server.models.dto.achievement.SaveAchievementDto;
import com.portfolio.server.models.entities.Achievement;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.repositories.AchievementRepository;
import com.portfolio.server.models.repositories.AdminRepository;
import com.portfolio.server.services.JwtService;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:application-test.properties")
public class AchievementControllerIntegrationTest {

	@Autowired
	private MockMvc mvc;

	@Autowired
	private JwtService jwtService;

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private AchievementRepository achievementRepository;

	private final ObjectMapper mapper = new ObjectMapper();

	@BeforeEach
	void setUp() {
		adminRepository.deleteAll();
		achievementRepository.deleteAll();
	}

	@SuppressWarnings("null")
	@Test
	void testSave() throws Exception {
		// Arrange
		SaveAchievementDto dto = new SaveAchievementDto("title", "Month Day, Year", "#FFF");
		String jsonDto = mapper.writeValueAsString(dto);

		adminRepository.save(new Admin("username", "password"));
		String bearerToken = "Bearer " + jwtService.createToken("username");

		// Act & Assert
		mvc.perform(post("/jorney")
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
		String achievementTitle = "title0";
		String adminUsername = "username0";

		SaveAchievementDto dto = new SaveAchievementDto(achievementTitle, "Month Day, Year - Edited", "#FFF");
		String jsonDto = mapper.writeValueAsString(dto);

		String bearerToken = "Bearer " + jwtService.createToken(adminUsername);

		// Act & Assert
		mvc.perform(put("/jorney")
				.contentType(MediaType.APPLICATION_JSON)
				.content(jsonDto)
				.header("Authorization", bearerToken))
				.andExpect(status().isOk());
	}

	private void seedDataBase(int size) {
		for (int i = 0; i < size; i++) {
			String title = "title" + i;
			String dateFormated = "Month " + i + "th, Year";
			String color = "color" + i;
			Admin admin = adminRepository.save(new Admin("username" + i, "password" + i));

			Achievement achievement = new Achievement(
					title,
					dateFormated,
					color,
					admin);

			achievementRepository.save(achievement);
		}
	}

	@SuppressWarnings("null")
	@Test
	void testFindAll() throws Exception {
		// Arrange
		seedDataBase(10);

		ResultMatcher responseContentIsNotNull = jsonPath("$").isNotEmpty();
		ResultMatcher responseJorneyListSizeIsSame = jsonPath("$", hasSize(5));

		// Act & Assert
		mvc.perform(get("/jorney?page=0&take=5"))
				.andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(responseContentIsNotNull)
				.andExpect(responseJorneyListSizeIsSame);
	}

	@SuppressWarnings("null")
	@Test
	void testFindAll_NoPagination() throws Exception {
		// Arrange
		seedDataBase(10);

		ResultMatcher responseContentIsNotNull = jsonPath("$").isNotEmpty();
		ResultMatcher responseJorneyListSizeIsSame = jsonPath("$", hasSize(10));

		// Act & Assert
		mvc.perform(get("/jorney"))
				.andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(responseContentIsNotNull)
				.andExpect(responseJorneyListSizeIsSame);

	}

	@SuppressWarnings("null")
	@Test
	void testCount() throws Exception {
		// Arrange
		seedDataBase(10);

		ResultMatcher responseContentIsNotNull = jsonPath("$").isNotEmpty();
		ResultMatcher responseCountIsSame = jsonPath("$", is(10));

		// Act & Arrange
		mvc.perform(get("/jorney/count"))
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(responseContentIsNotNull)
				.andExpect(responseCountIsSame);

	}

	// Run separately
	@Test
	void testDelete() throws Exception {
		// Arrange
		seedDataBase(10);
		String bearerToken = "Bearer " + jwtService.createToken("username1");

		// Act
		mvc.perform(delete("/jorney/{id}", 1)
				.header("Authorization", bearerToken))
				.andExpect(status().isOk());
	}
}
