package com.portfolio.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.portfolio.server.models.dto.technologie.SaveTechnologieDto;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.entities.Technologie;
import com.portfolio.server.models.enums.TechnologieCategory;
import com.portfolio.server.models.repositories.TechnologieRepository;

import jakarta.validation.ConstraintViolationException;

@Service
public class TechnologieService {

	@Autowired
	private TechnologieRepository technologieRepository;

	@Autowired
	private AdminService adminService;

	@Autowired
	private ViolationService violationService;

	public ResponseEntity<?> save(SaveTechnologieDto dto) {
		try {
			String name = dto.name();
			Technologie technologie = technologieRepository.findByName(name).orElse(null);

			if (technologie != null) {
				Technologie editedTechnologie = new Technologie(dto, technologie.getId());
				technologieRepository.save(editedTechnologie);
			} else {
				Admin adminAuth = adminService.getAdminAuth();
				Technologie newTechnologie = new Technologie(
						name, dto.experience(), dto.imageUrl(), dto.category(),
						dto.about(), dto.color(), adminAuth);

				technologieRepository.save(newTechnologie);
			}

			return ResponseEntity.ok().build();

		} catch (ConstraintViolationException e) {
			String errorMessage = violationService.getMessageFromConstraintViolationException(e);
			return ResponseEntity.badRequest().body(errorMessage);
		}
	}

	public ResponseEntity<?> findAll(int take, int page) {
		if (take <= 0 || page < 0) {
			return ResponseEntity.ok(technologieRepository.findAll());
		}

		Pageable pageable = PageRequest.of(page, take);
		List<Technologie> technologies = technologieRepository.findAll(pageable).getContent();

		return ResponseEntity.ok(technologies);
	}

	public ResponseEntity<?> count() {
		long count = technologieRepository.count();

		return ResponseEntity.ok(count);
	}

	public ResponseEntity<?> findAllByCategory(TechnologieCategory category) {
		List<Technologie> technologies = technologieRepository.findAllByCategory(category);

		return ResponseEntity.ok(technologies);
	}

	public ResponseEntity<?> delete(int id) {
		Technologie technologie = technologieRepository.findById(id).orElse(null);

		if (technologie == null) {
			return ResponseEntity.notFound().build();
		}

		technologieRepository.delete(technologie);
		return ResponseEntity.ok().build();
	}
}
