package com.portfolio.server.models.repositories;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.entities.Technologie;
import com.portfolio.server.models.enums.TechnologieCategory;

@DataJpaTest
public class TechnologieRepositoryUnitTest {

	@Autowired
	private TechnologieRepository repository;

	@Autowired
	private TestEntityManager entityManager;

	@BeforeEach
	void setUp() {
		repository.deleteAll();
		entityManager.clear();
	}

	@Test
	void testFindByName() {
		// Arrange
		String name = "technologie";
		persistTechnologie(
				new Technologie(name, "experience", "imageUrl", TechnologieCategory.BACKEND, "about", "#fffff",
						new Admin("username", "password")));

		// Act
		Technologie technologie = repository.findByName(name).orElse(null);

		// Assert
		assertNotNull(technologie);
		assertEquals(technologie.getName(), name);
	}

	@Test
	void testFindByName_NotFound() {
		// Arrange
		persistTechnologie(
				new Technologie("technologie", "experience", "imageUrl", TechnologieCategory.BACKEND, "about",
						"#fffff", new Admin("username", "password")));

		String name = "not-found";

		// Act
		Technologie technologie = repository.findByName(name).orElse(null);

		// Assert
		assertNull(technologie);
	}

	private void persistTechnologie(Technologie technologie) {
		entityManager.persist(technologie);
		entityManager.flush();
	}

	@Test
	void testFindAllByCategory() {
		// Arrange
		persistTechnologie(
				new Technologie("technologie1", "experience", "imageUrl", TechnologieCategory.BACKEND, "about",
						"#fffff", new Admin("username1", "password")));
		persistTechnologie(
				new Technologie("technologie2", "experience", "imageUrl", TechnologieCategory.BACKEND, "about",
						"#fffff", new Admin("username2", "password")));
		persistTechnologie(
				new Technologie("technologie3", "experience", "imageUrl", TechnologieCategory.FRONTEND, "about",
						"#fffff", new Admin("username3", "password")));

		// Act
		List<Technologie> technologies = repository.findAllByCategory(TechnologieCategory.BACKEND);

		// Assert
		assertNotNull(technologies);
		assertEquals(technologies.size(), 2);
	}
}
