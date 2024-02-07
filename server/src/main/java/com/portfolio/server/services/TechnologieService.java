package com.portfolio.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.portfolio.server.models.dto.technologie.CreateTechnologieDto;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.entities.Technologie;
import com.portfolio.server.models.repositories.TechnologieRepository;

@Service
public class TechnologieService {

	@Autowired
	private TechnologieRepository technologieRepository;

	@Autowired
	private AdminService adminService;

	public ResponseEntity<?> create(CreateTechnologieDto dto) {
		Admin adminAuth = adminService.getAdminAuth();
		Technologie technologie = new Technologie(dto.name(), dto.experience(), dto.imageUrl(), dto.category(),
				dto.about(), dto.color(), adminAuth);

		technologieRepository.save(technologie);

		return ResponseEntity.ok().build();
	}
}
