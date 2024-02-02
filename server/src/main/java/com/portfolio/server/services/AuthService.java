package com.portfolio.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.portfolio.server.models.dto.admin.LoginDto;
import com.portfolio.server.models.dto.admin.LoginResponseDto;
import com.portfolio.server.models.dto.admin.SignUpDto;
import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.repositories.AdminRepository;

@Service
public class AuthService {

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtService jwtService;

	private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	// @Value("${admin.secret}")
	// private String secret;

	@Autowired
	private Environment env;

	public ResponseEntity<?> login(LoginDto dto) {
		try {
			String username = dto.username();
			Admin admin = adminRepository.findByUsername(username).orElse(null);

			if (admin == null) {
				return ResponseEntity.badRequest().body("Admin not registred.");
			}

			String password = dto.password();
			UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(username, password);
			authenticationManager.authenticate(authToken);

			String token = jwtService.createToken(username);

			return ResponseEntity.ok(new LoginResponseDto(admin, token));
		} catch (BadCredentialsException e) {
			return ResponseEntity.badRequest().body("Invalid password.");
		}
	}

	public ResponseEntity<?> signUp(SignUpDto dto) {
		String secret = env.getProperty("admin.secret");

		Boolean isSecret = secret != null && secret.equals(dto.secret());

		if (isSecret) {
			String passwordEncrypted = passwordEncoder.encode(dto.password());
			adminRepository.save(new Admin(dto.username(), passwordEncrypted));

			return ResponseEntity.ok().build();
		} else {
			return ResponseEntity.badRequest().build();
		}
	}
}
