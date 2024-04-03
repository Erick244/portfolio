package com.portfolio.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.portfolio.server.models.dto.technology.SaveTechnologyDto;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.entities.Technology;
import com.portfolio.server.models.enums.TechnologyCategory;
import com.portfolio.server.models.repositories.TechnologyRepository;

import jakarta.validation.ConstraintViolationException;

@Service
public class TechnologyService {

	@Autowired
	private TechnologyRepository technologyRepository;

	@Autowired
	private AdminService adminService;

	@Autowired
	private ViolationService violationService;

	public ResponseEntity<?> save(SaveTechnologyDto dto) {
		try {
			String name = dto.name();
			Technology technology = technologyRepository.findByName(name).orElse(null);

			if (technology != null) {
				Technology editedTechnology = new Technology(dto, technology.getId());
				technologyRepository.save(editedTechnology);
			} else {
				Admin adminAuth = adminService.getAdminAuth();
				Technology newTechnology = new Technology(
						name, dto.knowledge(), dto.imageUrl(), dto.category(),
						dto.about(), dto.color(), adminAuth);

				technologyRepository.save(newTechnology);
			}

			return ResponseEntity.ok().build();

		} catch (ConstraintViolationException e) {
			String errorMessage = violationService.getMessageFromConstraintViolationException(e);
			return ResponseEntity.badRequest().body(errorMessage);
		}
	}

	public ResponseEntity<?> findAll(int take, int page) {
		if (take <= 0 || page < 0) {
			return ResponseEntity.ok(technologyRepository.findAll());
		}

		Pageable pageable = PageRequest.of(page, take);
		List<Technology> technologies = technologyRepository.findAll(pageable).getContent();

		return ResponseEntity.ok(technologies);
	}

	public ResponseEntity<?> count() {
		long count = technologyRepository.count();

		return ResponseEntity.ok(count);
	}

	public ResponseEntity<?> findAllByCategory(TechnologyCategory category) {
		List<Technology> technologies = technologyRepository.findAllByCategory(category);

		return ResponseEntity.ok(technologies);
	}

	public ResponseEntity<?> delete(int id) {
		Technology technology = technologyRepository.findById(id).orElse(null);

		if (technology == null) {
			return ResponseEntity.notFound().build();
		}

		technologyRepository.delete(technology);
		return ResponseEntity.ok().build();
	}
}
