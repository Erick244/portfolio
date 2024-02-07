package com.portfolio.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.portfolio.server.models.dto.technologie.CreateTechnologieDto;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.entities.Technologie;
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

	public ResponseEntity<?> create(CreateTechnologieDto dto) {
		try {
			String name = dto.name();
			Technologie technologie = technologieRepository.findByName(name).orElse(null);

			if (technologie != null) {
				return ResponseEntity.badRequest().body("A technology with the same name has already been registered.");
			}

			Admin adminAuth = adminService.getAdminAuth();
			Technologie newTechnologie = new Technologie(
					name, dto.experience(), dto.imageUrl(), dto.category(),
					dto.about(), dto.color(), adminAuth);

			technologieRepository.save(newTechnologie);

			return ResponseEntity.ok().build();

		} catch (ConstraintViolationException e) {
			String errorMessage = violationService.getMessageFromConstraintViolationException(e);
			return ResponseEntity.badRequest().body(errorMessage);
		}

	}
}
