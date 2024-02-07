package com.portfolio.server.services;

import org.springframework.stereotype.Service;

import jakarta.validation.ConstraintViolationException;

@Service
public class ViolationService {

	public String getMessageFromConstraintViolationException(ConstraintViolationException e) {
		return e.getConstraintViolations().stream().findFirst().get().getMessage();
	}
}
