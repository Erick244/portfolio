package com.portfolio.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.portfolio.server.models.dto.achievement.SaveAchievementDto;
import com.portfolio.server.models.entities.Achievement;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.repositories.AchievementRepository;

import jakarta.validation.ConstraintViolationException;

@Service
public class AchievementService {

	@Autowired
	private AchievementRepository achievementRepository;

	@Autowired
	private ViolationService violationService;

	@Autowired
	private AdminService adminService;

	public ResponseEntity<?> save(SaveAchievementDto dto) {
		try {
			String title = dto.title();
			Achievement achievement = achievementRepository.findByTitle(title).orElse(null);

			if (achievement != null) {
				Achievement achievementEdited = new Achievement(dto, achievement.getId());
				achievementRepository.save(achievementEdited);

				return ResponseEntity.ok().build();
			}

			Admin adminAuth = adminService.getAdminAuth();
			Achievement newAchievement = new Achievement(
					title,
					dto.dateFormated(),
					dto.color(),
					adminAuth);

			achievementRepository.save(newAchievement);

			return ResponseEntity.ok().build();

		} catch (ConstraintViolationException e) {
			String errorMessage = violationService.getMessageFromConstraintViolationException(e);
			return ResponseEntity.badRequest().body(errorMessage);
		}
	}

	public ResponseEntity<?> findAll(int take, int page) {
		if (take <= 0 || page < 0) {
			return ResponseEntity.ok(achievementRepository.findAll());
		}

		Pageable pageable = PageRequest.of(page, take);
		List<Achievement> achievements = achievementRepository.findAll(pageable).getContent();

		return ResponseEntity.ok(achievements);
	}

	public ResponseEntity<?> count() {
		long count = achievementRepository.count();

		return ResponseEntity.ok(count);
	}

	public ResponseEntity<?> delete(int id) {
		Achievement achievement = achievementRepository.findById(id).orElse(null);

		if (achievement == null) {
			return ResponseEntity.notFound().build();
		}

		achievementRepository.delete(achievement);
		return ResponseEntity.ok().build();
	}

}
