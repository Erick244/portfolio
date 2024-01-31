package com.portfolio.server.services;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTDecodeException;

@Service
public class JwtService {

	@Value("${jwt.token.secret}")
	private String secret;

	@Value("${jwt.token.issuer}")
	private String issuer;

	@Value("${jwt.token.zone.offset}")
	private String zoneOffset;

	public String createToken(String subject) {
		try {
			Algorithm algorithm = getAlgorithm();
			int oneMonthInSeconds = 60 * 60 * 24 * 30;

			String jwt = JWT.create()
					.withIssuer(issuer)
					.withSubject(subject)
					.withExpiresAt(createExpInstant(oneMonthInSeconds))
					.sign(algorithm);

			return jwt;
		} catch (JWTCreationException e) {
			System.out.println("JWT token creation error.\n");
			throw new JWTCreationException(e.getMessage(), e.getCause());
		}
	}

	public Algorithm getAlgorithm() {
		return Algorithm.HMAC256(secret);
	}

	public Instant createExpInstant(Integer seconds) {
		ZoneOffset localZoneOffset = ZoneOffset.of(zoneOffset);

		Instant expInstant = LocalDateTime
				.now()
				.plusSeconds(seconds)
				.toInstant(localZoneOffset);

		return expInstant;
	}

	public String decodeToken(String token) {
		try {
			Algorithm algorithm = getAlgorithm();

			String subject = JWT.require(algorithm)
					.withIssuer(issuer)
					.build()
					.verify(token)
					.getSubject();

			return subject;

		} catch (JWTDecodeException e) {
			System.out.println("JWT token decode error.\n");
			throw new JWTDecodeException(e.getMessage(), e.getCause());
		}
	}

	// Methods for tests
	public void setSecret(String secret) {
		this.secret = secret;
	}

	public void setIssuer(String issuer) {
		this.issuer = issuer;
	}

	public void setZoneOffset(String zoneOffset) {
		this.zoneOffset = zoneOffset;
	}

}
