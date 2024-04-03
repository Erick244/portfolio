package com.portfolio.server.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.TestPropertySource;

import com.portfolio.server.models.dto.admin.AdminByTokenDto;
import com.portfolio.server.models.dto.admin.LoginDto;
import com.portfolio.server.models.dto.admin.LoginResponseDto;
import com.portfolio.server.models.dto.admin.SignUpDto;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.repositories.AdminRepository;

@TestPropertySource(locations = "classpath:application-test.properties")
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class AuthServiceIntegrationTest {

	@Autowired
	private AuthService authService;

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private JwtService jwtService;

	@BeforeEach
	void setUp() {
		adminRepository.deleteAll();
	}

	@Test
	void testLogin() {
		// Arrange
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String password = "password";
		String passwordEncrypted = passwordEncoder.encode(password);
		String username = "username";
		Admin admin = new Admin(username, passwordEncrypted);
		adminRepository.save(admin);

		LoginDto dto = new LoginDto(username, password);

		// Act
		ResponseEntity<?> res = authService.login(dto);

		// Assert
		LoginResponseDto body = (LoginResponseDto) res.getBody();

		assertEquals(res.getStatusCode().value(), 200);
		assertNotNull(body);
		assertEquals(body.admin().toString(), admin.toString());
		assertNotNull(body.token());
	}

	@Test
	void testLogin_WithAdminNotRegistered() {
		// Arrange
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String password = "password";
		String passwordEncrypted = passwordEncoder.encode(password);

		Admin admin = new Admin("other-username", passwordEncrypted);
		adminRepository.save(admin);

		String username = "username";
		LoginDto dto = new LoginDto(username, password);

		// Act
		ResponseEntity<?> res = authService.login(dto);

		// Assert
		String body = (String) res.getBody();

		assertEquals(res.getStatusCode().value(), 400);
		assertNotNull(body);
		assertEquals(body, "Admin not registered.");
	}

	@Test
	void testLogin_WithPasswordIncorrect() {
		// Arrange
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String passwordEncrypted = passwordEncoder.encode("password");
		String username = "username";
		Admin admin = new Admin(username, passwordEncrypted);
		adminRepository.save(admin);

		LoginDto dto = new LoginDto(username, "other-password");

		// Act
		ResponseEntity<?> res = authService.login(dto);

		// Assert
		String body = (String) res.getBody();

		assertEquals(res.getStatusCode().value(), 400);
		assertNotNull(body);
		assertEquals(body, "Invalid password.");
	}

	@Test
	void testSignUp() {
		// Arrange
		SignUpDto dto = new SignUpDto("username", "password", "fake-secret-for-tests");

		// Act
		ResponseEntity<?> res = authService.signUp(dto);

		// Assert
		assertEquals(res.getStatusCode().value(), 204);
	}

	@Test
	void testSignUp_WithNotSecret() {
		// Arrange
		SignUpDto dto = new SignUpDto("username", "password", "secret");

		// Act
		ResponseEntity<?> res = authService.signUp(dto);

		// Assert
		assertEquals(res.getStatusCode().value(), 400);
	}

	@Test
	void testAdminByToken() {
		// Arrange
		Admin admin = adminRepository.save(new Admin("username", "password"));
		String token = jwtService.createToken("username");
		AdminByTokenDto dto = new AdminByTokenDto(token);

		// Act
		ResponseEntity<?> res = authService.adminByToken(dto);

		// Assert
		Admin adminByToken = (Admin) res.getBody();

		assertNotNull(adminByToken);
		assertEquals(admin.toString(), adminByToken.toString());
	}

	@Test
	void testAdminByToken_NotFound() {
		// Arrange
		String token = jwtService.createToken("username");
		AdminByTokenDto dto = new AdminByTokenDto(token);

		// Act
		ResponseEntity<?> res = authService.adminByToken(dto);

		// Assert
		assertEquals(res.getStatusCode().value(), 404);
	}
}
