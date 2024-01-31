package com.portfolio.server.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
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
}
