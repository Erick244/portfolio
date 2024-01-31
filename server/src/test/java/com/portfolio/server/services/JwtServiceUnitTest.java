package com.portfolio.server.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.Instant;
import java.util.Date;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.auth0.jwt.exceptions.JWTDecodeException;

public class JwtServiceUnitTest {

	private JwtService jwtService;

	@BeforeEach
	void setUp() {
		jwtService = new JwtService();
		jwtService.setIssuer("test-issuer");
		jwtService.setSecret("test-secret");
		jwtService.setZoneOffset("-03:00");
	}

	@Test
	void testCreateExpInstant() {
		// Arrange
		int seconds = 60;

		// Act
		Instant expInstant = jwtService.createExpInstant(seconds);

		// Assert
		assertNotNull(expInstant);
		assertNotEquals(expInstant, new Date().toInstant());
	}

	@Test
	void testCreateToken() {
		// Arrange
		String subject = "username";

		// Act
		String jwt = jwtService.createToken(subject);

		System.out.println(jwt.getClass());

		// Assert
		assertNotNull(jwt);
		assertTrue(jwt.length() > 0);
	}

	@Test
	void testDecodeToken() {
		// Arrange
		String subject = "username";
		String token = jwtService.createToken(subject);

		// Act
		String tokenSubject = jwtService.decodeToken(token);

		// Assert
		assertNotNull(tokenSubject);
		assertEquals(subject, tokenSubject);
	}

	@Test
	void testDecodeToken_ThrowJWTDecodeException() {
		// Arrange
		String token = "invalid-token";

		// Act & Assert
		assertThrows(JWTDecodeException.class, () -> {
			jwtService.decodeToken(token);
		});
	}
}
