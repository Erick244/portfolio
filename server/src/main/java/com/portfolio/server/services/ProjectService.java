package com.portfolio.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.portfolio.server.models.dto.project.SaveProjectDto;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.entities.Project;
import com.portfolio.server.models.repositories.ProjectRepository;

import jakarta.validation.ConstraintViolationException;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository projectRepository;

	@Autowired
	private ViolationService violationService;

	@Autowired
	private AdminService adminService;

	public ResponseEntity<?> save(SaveProjectDto dto) {
		try {
			String name = dto.name();
			Project project = projectRepository.findByName(name).orElse(null);

			if (project != null) {
				Project projectEdited = new Project(dto, project.getId());
				projectRepository.save(projectEdited);

				return ResponseEntity.ok().build();
			}

			Admin adminAuth = adminService.getAdminAuth();
			Project newProject = new Project(
					name,
					dto.imageUrl(),
					dto.repoUrl(),
					dto.siteUrl(),
					dto.description(),
					dto.color(),
					adminAuth);

			projectRepository.save(newProject);

			return ResponseEntity.ok().build();

		} catch (ConstraintViolationException e) {
			String errorMessage = violationService.getMessageFromConstraintViolationException(e);
			return ResponseEntity.badRequest().body(errorMessage);
		}
	}
}
