package com.portfolio.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.server.models.dto.technologie.SaveTechnologieDto;
import com.portfolio.server.models.enums.TechnologieCategory;
import com.portfolio.server.services.TechnologieService;

@RestController
@RequestMapping("/technologies")
public class TechnologieController {

	@Autowired
	private TechnologieService technologieService;

	@RequestMapping(method = { RequestMethod.POST, RequestMethod.PUT })
	public ResponseEntity<?> save(@RequestBody SaveTechnologieDto dto) {
		return technologieService.save(dto);
	}

	@GetMapping
	public ResponseEntity<?> findAll(
			@RequestParam(defaultValue = "0", required = false) int take,
			@RequestParam(defaultValue = "0", required = false) int page) {
		return technologieService.findAll(take, page);
	}

	@GetMapping("/count")
	public ResponseEntity<?> count() {
		return technologieService.count();
	}

	@GetMapping("/findAllByCategory/{category}")
	public ResponseEntity<?> findAllByCategory(@PathVariable TechnologieCategory category) {
		return technologieService.findAllByCategory(category);
	}
}
