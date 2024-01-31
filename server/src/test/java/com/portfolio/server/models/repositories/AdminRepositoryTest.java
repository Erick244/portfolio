package com.portfolio.server.models.repositories;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import com.portfolio.server.models.entities.Admin;

@DataJpaTest
public class AdminRepositoryTest {

	@Autowired
	private AdminRepository repository;

	@Autowired
	private TestEntityManager entityManager;

	@Test
	void testFindByUsername() {
		// Arrange
		String username = "admin";
		persistAdmin(new Admin(username, "password"));

		// Act
		Admin admin = repository.findByUsername(username).orElse(null);

		// Assert
		assertNotNull(admin);
		assertEquals(admin.getUsername(), username);
		assertEquals(admin.getPassword(), "password");
	}

	private void persistAdmin(Admin admin) {
		entityManager.persist(admin);
		entityManager.flush();
	}

	@Test
	void testFindByUsername_NotFound() {
		// Arrange
		String username = "not-found";

		// Act
		Admin admin = repository.findByUsername(username).orElse(null);

		// Assert
		assertNull(admin);
	}
}
