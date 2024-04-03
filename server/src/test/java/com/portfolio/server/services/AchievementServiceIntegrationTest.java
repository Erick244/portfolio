package com.portfolio.server.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.context.TestPropertySource;

import com.portfolio.server.models.dto.achievement.SaveAchievementDto;
import com.portfolio.server.models.entities.Achievement;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.repositories.AchievementRepository;
import com.portfolio.server.models.repositories.AdminRepository;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestPropertySource(locations = "classpath:application-test.properties")
public class AchievementServiceIntegrationTest {

	@Autowired
	private AchievementService achievementService;

	@Autowired
	private AchievementRepository achievementRepository;

	@Autowired
	private AdminRepository adminRepository;

	@BeforeEach
	void setUp() {
		adminRepository.deleteAll();
		achievementRepository.deleteAll();
	}

	@Test
	void testSave() {
		// Arrange
		authenticateAdmin();
		SaveAchievementDto dto = new SaveAchievementDto(
				"title",
				"Month Day, Year",
				"#FFF");

		// Act
		ResponseEntity<?> resp = achievementService.save(dto);

		// Assert
		assertEquals(resp.getStatusCode().value(), 200);
	}

	private Admin authenticateAdmin() {
		Admin admin = adminRepository.save(new Admin("username", "password"));
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(admin, null,
				admin.getAuthorities());
		SecurityContextHolder.getContext().setAuthentication(authToken);

		return admin;
	}

	@Test
	void testSave_Edit() {
		// Arrange
		Admin admin = authenticateAdmin();
		Achievement achievement = new Achievement(
				"title",
				"Month Day, Year",
				"#FFF",
				admin);

		achievementRepository.save(achievement);

		SaveAchievementDto dto = new SaveAchievementDto(
				achievement.getTitle(),
				"Month Day, Year Edited",
				achievement.getColor());

		// Act
		ResponseEntity<?> resp = achievementService.save(dto);

		// Assert
		Achievement achievementEdited = achievementRepository.findByTitle(achievement.getTitle()).orElse(null);

		assertEquals(resp.getStatusCode().value(), 200);
		assertNotNull(achievementEdited);
		assertEquals(achievementEdited.getDateFormatted(), dto.dateFormatted());
	}

	@Test
	void testSave_TitleNull() {
		// Arrange
		authenticateAdmin();
		SaveAchievementDto dto = new SaveAchievementDto(
				null,
				"Month Day, Year",
				"#FFF");

		// Act
		ResponseEntity<?> resp = achievementService.save(dto);

		// Assert
		String errorMessage = (String) resp.getBody();

		assertEquals(resp.getStatusCode().value(), 400);
		assertNotNull(errorMessage);
		assertEquals(errorMessage, "The title cannot be null.");
	}

	@Test
	void testSave_DateNull() {
		// Arrange
		authenticateAdmin();
		SaveAchievementDto dto = new SaveAchievementDto(
				"title",
				null,
				"#FFF");

		// Act
		ResponseEntity<?> resp = achievementService.save(dto);

		// Assert
		String errorMessage = (String) resp.getBody();

		assertEquals(resp.getStatusCode().value(), 400);
		assertNotNull(errorMessage);
		assertEquals(errorMessage, "The date cannot be null.");
	}

	@Test
	void testSave_ColorNull() {
		// Arrange
		authenticateAdmin();
		SaveAchievementDto dto = new SaveAchievementDto(
				"title",
				"Month Day, Year",
				null);

		// Act
		ResponseEntity<?> resp = achievementService.save(dto);

		// Assert
		String errorMessage = (String) resp.getBody();

		assertEquals(resp.getStatusCode().value(), 400);
		assertNotNull(errorMessage);
		assertEquals(errorMessage, "The color cannot be null.");
	}

	@Test
	void testSave_AllNull() {
		// Arrange
		authenticateAdmin();
		SaveAchievementDto dto = new SaveAchievementDto(
				null,
				null,
				null);

		// Act
		ResponseEntity<?> resp = achievementService.save(dto);

		// Assert
		String errorMessage = (String) resp.getBody();

		assertEquals(resp.getStatusCode().value(), 400);
		assertNotNull(errorMessage);
	}

	@SuppressWarnings("unchecked")
	@Test
	void testFindAll() {
		// Arrange
		int take = 5;
		int page = 0;
		seedDataBase(10);

		// Act
		ResponseEntity<?> resp = achievementService.findAll(take, page);
		List<Achievement> journey = (List<Achievement>) resp.getBody();

		// Assert
		assertEquals(resp.getStatusCode().value(), 200);
		assertNotNull(journey);
		assertEquals(journey.size(), take);
	}

	private void seedDataBase(int size) {
		for (int i = 0; i < size; i++) {
			String title = "title" + i;
			String dateFormatted = "Month " + i + "th, Year";
			String color = "color" + i;
			Admin admin = adminRepository.save(new Admin("username" + i, "password" + i));

			Achievement achievement = new Achievement(
					title,
					dateFormatted,
					color,
					admin);

			achievementRepository.save(achievement);
		}
	}

	@SuppressWarnings("unchecked")
	@Test
	void testFindAll_OtherPage() {
		// Arrange
		int take = 5;
		int page = 1;
		seedDataBase(10);

		// Act
		ResponseEntity<?> resp = achievementService.findAll(take, page);
		List<Achievement> journey = (List<Achievement>) resp.getBody();

		// Assert
		assertEquals(resp.getStatusCode().value(), 200);
		assertNotNull(journey);
		assertEquals(journey.size(), take);
	}

	@SuppressWarnings("unchecked")
	@Test
	void testFindAll_NoPagination() {
		// Arrange
		int take = -1;
		int page = -1;
		seedDataBase(10);

		// Act
		ResponseEntity<?> resp = achievementService.findAll(take, page);
		List<Achievement> journey = (List<Achievement>) resp.getBody();

		// Assert
		assertEquals(resp.getStatusCode().value(), 200);
		assertNotNull(journey);
		assertEquals(journey.size(), 10);
	}

	@Test
	void testCount() {
		// Arrange
		seedDataBase(10);

		// Act
		ResponseEntity<?> resp = achievementService.count();

		// Assert
		assertEquals(resp.getStatusCode().value(), 200);
		assertEquals(resp.getBody(), 10L);
	}

	@Test
	void testDelete() {
		// Arrange
		Admin admin = new Admin("username", "password");
		adminRepository.save(admin);
		achievementRepository.save(new Achievement("title", "dateFormatted", "color", admin));
		int id = achievementRepository.findByTitle("title").get().getId();

		// Act
		ResponseEntity<?> resp = achievementService.delete(id);

		// Assert
		long count = achievementRepository.count();
		assertEquals(resp.getStatusCode().value(), 200);
		assertEquals(count, 0l);
	}

	@Test
	void testDelete_NotFound() {
		// Arrange
		seedDataBase(10);
		int achievementId = 99;

		// Act
		ResponseEntity<?> resp = achievementService.delete(achievementId);

		// Assert
		assertEquals(resp.getStatusCode().value(), 404);
	}
}
