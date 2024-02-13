package com.portfolio.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.server.models.dto.project.SaveProjectDto;
import com.portfolio.server.services.ProjectService;

@RestController
@RequestMapping("/projects")
public class ProjectController {

	@Autowired
	private ProjectService projectService;

	@RequestMapping(method = { RequestMethod.POST, RequestMethod.PUT })
	public ResponseEntity<?> save(@RequestBody SaveProjectDto dto) {
		return projectService.save(dto);
	}
}
