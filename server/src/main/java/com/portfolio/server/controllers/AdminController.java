package com.portfolio.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.server.models.dto.admin.LoginDto;
import com.portfolio.server.models.dto.admin.SignUpDto;
import com.portfolio.server.services.AuthService;

@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private AuthService authService;

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginDto dto) {
		return authService.login(dto);
	}

	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody SignUpDto dto) {

		return authService.signUp(dto);
	}

	@GetMapping("/token/{token}")
	public ResponseEntity<?> adminByToken(@PathVariable String token) {
		return authService.adminByToken(token);
	}

}
