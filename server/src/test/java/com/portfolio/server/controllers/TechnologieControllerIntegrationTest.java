package com.portfolio.server.controllers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
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
import com.portfolio.server.models.dto.technologie.CreateTechnologieDto;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.enums.TechnologieCategory;
import com.portfolio.server.models.repositories.AdminRepository;
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

	private final ObjectMapper mapper = new ObjectMapper();

	@BeforeEach
	void setUp() {
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

		// Act
		mvc.perform(post("/technologies")
				.content(jsonDto)
				.contentType(MediaType.APPLICATION_JSON)
				.header("Authorization", bearerToken))
				.andExpect(status().isOk());
	}
}
