package com.portfolio.server.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.test.context.TestPropertySource;

import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.repositories.AdminRepository;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestPropertySource(locations = "classpath:application-test.properties")
public class AdminServiceIntegrationTest {

	@Autowired
	private AdminService adminService;

	@Autowired
	private AdminRepository adminRepository;

	@BeforeEach
	void setUp() {
		adminRepository.deleteAll();
	}

	@Test
	void testLoadUserByUsername() {
		// Arrange
		String username = "admin";
		Admin admin = new Admin(username, "password");
		adminRepository.save(admin);

		// Act
		UserDetails userDetails = adminService.loadUserByUsername(username);

		// Assert
		assertNotNull(userDetails);
		assertEquals(username, userDetails.getUsername());
	}

	@Test
	void testLoadUserByUsername_ThrowsUsernameNotFoundException() {
		// Arrange
		String username = "not-found";

		// Act & Assert
		assertThrows(UsernameNotFoundException.class, () -> {
			adminService.loadUserByUsername(username);
		});
	}

	@Test
	void testGetAdminAuth() {
		// Arrange
		Admin admin = adminRepository.save(new Admin("username", "password"));
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(admin, null,
				admin.getAuthorities());
		SecurityContextHolder.getContext().setAuthentication(authToken);

		// Act
		Admin adminAuth = adminService.getAdminAuth();

		// Assert
		assertNotNull(adminAuth);
		assertEquals(admin.toString(), adminAuth.toString());
	}

	@Test
	void testGetAdminAuth_NotAuth() {
		// Arrange & Act
		Admin adminAuth = adminService.getAdminAuth();

		// Assert
		assertNull(adminAuth);
	}
}
