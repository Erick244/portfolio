package com.portfolio.server.controllers;

import static org.hamcrest.Matchers.is;
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
import org.springframework.core.env.Environment;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.portfolio.server.models.dto.admin.AdminByTokenDto;
import com.portfolio.server.models.dto.admin.LoginDto;
import com.portfolio.server.models.dto.admin.SignUpDto;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.repositories.AdminRepository;
import com.portfolio.server.services.JwtService;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestPropertySource(locations = "classpath:application-test.properties")
@AutoConfigureMockMvc
public class AdminControllerIntegrationTest {

	@Autowired
	private MockMvc mvc;

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private Environment env;

	@Autowired
	private JwtService jwtService;

	private final ObjectMapper mapper = new ObjectMapper();

	private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	@BeforeEach
	void setup() {
		adminRepository.deleteAll();
	}

	@SuppressWarnings("null")
	@Test
	void testLogin() throws Exception {
		// Arrange
		String passwordEncrypted = passwordEncoder.encode("password");
		Admin admin = adminRepository.save(new Admin("username", passwordEncrypted));
		LoginDto dto = new LoginDto("username", "password");
		String jsonDto = mapper.writeValueAsString(dto);

		ResultMatcher responseContentIsNotEmpty = jsonPath("$").isNotEmpty();
		ResultMatcher responseAdminIdIsSame = jsonPath("$.admin.id", is(admin.getId()));
		ResultMatcher responseAdminUsernameIsSame = jsonPath("$.admin.username", is(admin.getUsername()));
		ResultMatcher responseTokenIsNotEmpty = jsonPath("$.token").isNotEmpty();

		// Act & Assert
		mvc.perform(post("/admin/login")
				.content(jsonDto)
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
				.andExpect(responseContentIsNotEmpty)
				.andExpect(responseAdminIdIsSame)
				.andExpect(responseAdminUsernameIsSame)
				.andExpect(responseTokenIsNotEmpty);
	}

	@SuppressWarnings("null")
	@Test
	void testSignUp() throws Exception {
		// Arrange
		String username = "username";
		String password = "password";
		adminRepository.save(new Admin(username, password));
		String secret = env.getProperty("admin.secret");

		SignUpDto dto = new SignUpDto("new admin", password, secret);
		String jsonDto = mapper.writeValueAsString(dto);
		String bearerToken = "Bearer " + jwtService.createToken(username);

		// Act & Assert
		mvc.perform(post("/admin/signup")
				.content(jsonDto)
				.contentType(MediaType.APPLICATION_JSON)
				.header("Authorization", bearerToken))
				.andExpect(status().isNoContent());
	}

	@SuppressWarnings("null")
	@Test
	void testAdminByToken() throws Exception {
		// Arrange
		Admin admin = adminRepository.save(new Admin("username", "password"));
		String token = jwtService.createToken("username");
		AdminByTokenDto dto = new AdminByTokenDto(token);
		String jsonDto = mapper.writeValueAsString(dto);

		ResultMatcher responseContentIsNotEmpty = jsonPath("$").isNotEmpty();
		ResultMatcher responseAdminIdIsSame = jsonPath("$.id", is(admin.getId()));
		ResultMatcher responseAdminUsernameIsSame = jsonPath("$.username", is(admin.getUsername()));

		// Act & Assert
		mvc.perform(post("/admin/token")
				.content(jsonDto)
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(responseContentIsNotEmpty)
				.andExpect(responseAdminIdIsSame)
				.andExpect(responseAdminUsernameIsSame);
	}

}
