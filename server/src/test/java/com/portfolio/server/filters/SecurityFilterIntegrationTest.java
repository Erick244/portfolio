package com.portfolio.server.filters;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.io.IOException;

import org.junit.jupiter.api.BeforeEach;
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
import com.portfolio.server.models.repositories.AdminRepository;
import com.portfolio.server.services.JwtService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestPropertySource(locations = "classpath:application-test.properties")
public class SecurityFilterIntegrationTest {

	@Autowired
	private SecurityFilter securityFilter;

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private JwtService jwtService;

	@BeforeEach
	void setUp() {
		adminRepository.deleteAll();
	}

	@Test
	void testDoFilterInternal() throws ServletException, IOException {
		// Arrange
		String subject = "username";
		Admin admin = new Admin(subject, "password");
		adminRepository.save(admin);

		String token = jwtService.createToken(subject);
		MockHttpServletRequest req = createRequestWhithAuthToken("Bearer " + token);

		MockHttpServletResponse res = new MockHttpServletResponse();
		FilterChain filterChain = getFilterChainImpl();

		// Act
		securityFilter.doFilter(req, res, filterChain);

		// Assert
		Admin adminAuth = getAuthAdmin();
		assertEquals(res.getStatus(), 200);
		assertEquals(admin.toString(), adminAuth.toString());
	}

	@SuppressWarnings("null")
	private MockHttpServletRequest createRequestWhithAuthToken(String bearerToken) {
		MockHttpServletRequest req = new MockHttpServletRequest();
		req.addHeader("Authorization", bearerToken);

		return req;
	}

	private FilterChain getFilterChainImpl() {
		return new FilterChain() {
			@Override
			public void doFilter(ServletRequest request, ServletResponse response)
					throws IOException, ServletException {

			}
		};
	}

	private Admin getAuthAdmin() {
		Admin authAdmin = (Admin) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return authAdmin;
	}

	@Test
	void testDoFilterInternal_WhithAdminInTokenNotExist() throws ServletException, IOException {
		// Arrange
		Admin admin = new Admin("username", "password");
		adminRepository.save(admin);

		String token = jwtService.createToken("other subject");
		MockHttpServletRequest req = createRequestWhithAuthToken("Bearer " + token);

		MockHttpServletResponse res = new MockHttpServletResponse();
		FilterChain filterChain = getFilterChainImpl();

		// Act
		securityFilter.doFilter(req, res, filterChain);

		// Assert
		assertEquals(res.getStatus(), 403);
		assertEquals(res.getContentAsString(),
				"Valid token but the associated admin does not exist. Please request new access.");
	}

	@Test
	void testExtractBearerToken() {
		// Arrange
		String mockToken = "token";
		MockHttpServletRequest req = createRequestWhithAuthToken("Bearer " + mockToken);

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
		MockHttpServletRequest req = createRequestWhithAuthToken("InvalidFormat " + mockToken);

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
		Admin authAdmin = getAuthAdmin();
		assertEquals(admin.toString(), authAdmin.toString());
	}

	@Test
	void testSendResponseErrorMessage() throws IOException {
		// Arrange
		MockHttpServletResponse res = new MockHttpServletResponse();
		String message = "Test message";
		// Act
		securityFilter.sendResponseErrorMessage(res, HttpStatus.FORBIDDEN, message);

		// Assert
		assertEquals(res.getStatus(), 403);
		assertEquals(res.getContentAsString(), message);
	}
}
