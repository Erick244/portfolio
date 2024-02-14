package com.portfolio.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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

	public ResponseEntity<?> findAll(int take, int page) {
		if (take <= 0 || page < 0) {
			return ResponseEntity.ok(projectRepository.findAll());
		}

		Pageable pageable = PageRequest.of(page, take);
		List<Project> projects = projectRepository.findAll(pageable).getContent();

		return ResponseEntity.ok(projects);
	}

	public ResponseEntity<?> count() {
		long count = projectRepository.count();

		return ResponseEntity.ok(count);
	}

	public ResponseEntity<?> delete(int id) {
		Project project = projectRepository.findById(id).orElse(null);

		if (project == null) {
			return ResponseEntity.notFound().build();
		}

		projectRepository.delete(project);
		return ResponseEntity.ok().build();
	}

}
