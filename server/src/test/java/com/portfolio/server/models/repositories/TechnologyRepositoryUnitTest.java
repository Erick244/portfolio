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
import com.portfolio.server.models.entities.Technology;
import com.portfolio.server.models.enums.TechnologyCategory;
import com.portfolio.server.models.enums.TechnologyKnowledge;

@DataJpaTest
public class TechnologyRepositoryUnitTest {

	@Autowired
	private TechnologyRepository repository;

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
		String name = "technology";
		persistTechnology(
				new Technology(name, TechnologyKnowledge.EXPERT, "imageUrl", TechnologyCategory.BACKEND, "about",
						"#fffff",
						new Admin("username", "password")));

		// Act
		Technology technology = repository.findByName(name).orElse(null);

		// Assert
		assertNotNull(technology);
		assertEquals(technology.getName(), name);
	}

	@Test
	void testFindByName_NotFound() {
		// Arrange
		persistTechnology(
				new Technology("technology", TechnologyKnowledge.EXPERT, "imageUrl", TechnologyCategory.BACKEND,
						"about",
						"#fffff", new Admin("username", "password")));

		String name = "not-found";

		// Act
		Technology technology = repository.findByName(name).orElse(null);

		// Assert
		assertNull(technology);
	}

	private void persistTechnology(Technology technology) {
		entityManager.persist(technology.getCreatedBy());
		entityManager.persist(technology);
		entityManager.flush();
	}

	@Test
	void testFindAllByCategory() {
		// Arrange
		persistTechnology(
				new Technology("technology1", TechnologyKnowledge.EXPERT, "imageUrl", TechnologyCategory.BACKEND,
						"about",
						"#fffff", new Admin("username1", "password")));
		persistTechnology(
				new Technology("technology2", TechnologyKnowledge.EXPERT, "imageUrl", TechnologyCategory.BACKEND,
						"about",
						"#fffff", new Admin("username2", "password")));
		persistTechnology(
				new Technology("technology3", TechnologyKnowledge.EXPERT, "imageUrl", TechnologyCategory.FRONTEND,
						"about",
						"#fffff", new Admin("username3", "password")));

		// Act
		List<Technology> technologies = repository.findAllByCategory(TechnologyCategory.BACKEND);

		// Assert
		assertNotNull(technologies);
		assertEquals(technologies.size(), 2);
	}
}
