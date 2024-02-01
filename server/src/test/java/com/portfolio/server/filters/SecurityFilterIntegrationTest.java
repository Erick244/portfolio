package com.portfolio.server.filters;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.io.IOException;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.HttpStatus;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.context.TestPropertySource;

import com.portfolio.server.models.entities.Admin;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestPropertySource(locations = "classpath:application-test.properties")
public class SecurityFilterIntegrationTest {

	@Autowired
	private SecurityFilter securityFilter;

	@Test // Testar quando o controlaor for criado.
	void testDoFilterInternal() {

	}

	@Test
	void testExtractBearerToken() {
		// Arrange
		String mockToken = "token";
		MockHttpServletRequest req = new MockHttpServletRequest();
		req.addHeader("Authorization", "Bearer " + mockToken);

		// Act
		String token = securityFilter.extractBearerToken(req);

		// Assert
		assertNotNull(token);
		assertEquals(mockToken, token);
	}

	@Test
	void testExtractBearerToken_ButNotIsBearerToken() {
		// Arrange
		String mockToken = "token";
		MockHttpServletRequest req = new MockHttpServletRequest();
		req.addHeader("Authorization", "InvalidFormat " + mockToken);

		// Act
		String token = securityFilter.extractBearerToken(req);

		// Assert
		assertNull(token);
	}

	@Test
	void testLoginAdminInSecurityContext() {
		// Arrange
		Admin admin = new Admin("username", "password");

		// Act
		securityFilter.loginAdminInSecurityContext(admin);

		// Assert
		Admin authAdmin = (Admin) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		assertEquals(admin.toString(), authAdmin.toString());
	}

	@Test
	void testSendResponseErrorMessage() throws IOException {
		// Arrange
		MockHttpServletResponse res = new MockHttpServletResponse();

		// Act
		securityFilter.sendResponseErrorMessage(res, HttpStatus.FORBIDDEN, "Test message");

		// Assert
		// Due to the res.flush() method, the error message is cleared when sent.
		assertEquals(res.getStatus(), 403);
	}
}
