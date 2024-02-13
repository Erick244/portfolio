package com.portfolio.server.models.repositories;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.entities.Project;

@DataJpaTest
public class ProjectRepositoryUnitTest {

	@Autowired
	private ProjectRepository repository;

	@Autowired
	private TestEntityManager entityManager;

	@BeforeEach
	void setUp() {
		entityManager.clear();
		repository.deleteAll();
	}

	@Test
	void testFindByName() {
		// Arrange
		Project projectPersist = new Project(
				"name",
				null,
				"repoUrl",
				null,
				"description",
				"#FFF",
				null);
		persistProject(projectPersist);

		// Act
		Project project = repository.findByName("name").orElse(null);

		// Assert
		assertNotNull(project);
		assertEquals(project.toString(), projectPersist.toString());
	}

	private void persistProject(Project project) {
		Admin admin = entityManager.persist(new Admin("username", "password"));
		project.setCreatedBy(admin);
		entityManager.persist(project);
		entityManager.flush();
	}
}
