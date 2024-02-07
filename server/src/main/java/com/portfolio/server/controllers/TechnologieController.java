package com.portfolio.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.server.models.dto.technologie.CreateTechnologieDto;
import com.portfolio.server.services.TechnologieService;

@RestController
@RequestMapping("/technologies")
public class TechnologieController {

	@Autowired
	private TechnologieService technologieService;

	@PostMapping
	public ResponseEntity<?> create(@RequestBody CreateTechnologieDto dto) {
		return technologieService.create(dto);
	}
}
