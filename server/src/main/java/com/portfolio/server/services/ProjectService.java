package com.portfolio.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.portfolio.server.models.dto.project.SaveProjectDto;
import com.portfolio.server.models.repositories.ProjectRepository;

import jakarta.validation.ConstraintViolationException;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository projectRepository;

	@Autowired
	private ViolationService violationService;

	public ResponseEntity<?> save(SaveProjectDto dto) {
		try {
			String name = dto.name();
			// findByName

			return ResponseEntity.ok().build();

		} catch (ConstraintViolationException e) {
			String errorMessage = violationService.getMessageFromConstraintViolationException(e);
			return ResponseEntity.badRequest().body(errorMessage);
		}
	}
}
