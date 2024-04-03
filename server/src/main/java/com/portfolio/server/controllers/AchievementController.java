package com.portfolio.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.server.models.dto.achievement.SaveAchievementDto;
import com.portfolio.server.services.AchievementService;

@RestController
@RequestMapping("/journey")
public class AchievementController {

	@Autowired
	private AchievementService achievementService;

	@RequestMapping(method = { RequestMethod.POST, RequestMethod.PUT })
	public ResponseEntity<?> save(@RequestBody SaveAchievementDto dto) {
		return achievementService.save(dto);
	}

	@GetMapping
	public ResponseEntity<?> findAll(
			@RequestParam(defaultValue = "0", required = false) int take,
			@RequestParam(defaultValue = "0", required = false) int page) {
		return achievementService.findAll(take, page);
	}

	@GetMapping("/count")
	public ResponseEntity<?> count() {
		return achievementService.count();
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable int id) {
		return achievementService.delete(id);
	}
}
