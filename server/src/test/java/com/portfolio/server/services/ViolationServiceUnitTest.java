package com.portfolio.server.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.Collections;
import java.util.Set;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.Path;
import jakarta.validation.metadata.ConstraintDescriptor;

public class ViolationServiceUnitTest {
	private ViolationService service;

	@BeforeEach
	void setUp() {
		service = new ViolationService();
	}

	@Test
	void testGetMessageFromConstraintViolationException() {
		// Arrange
		Set<ConstraintViolation<?>> violations = Collections.singleton(createConstraintViolation("message"));
		ConstraintViolationException exception = new ConstraintViolationException(violations);

		// Act
		String message = service.getMessageFromConstraintViolationException(exception);

		// Assert
		assertNotNull(message);
		assertEquals(message, "message");
	}

	private ConstraintViolation<?> createConstraintViolation(String message) {
		return new ConstraintViolation<Object>() {

			@Override
			public String getMessage() {
				return message;
			}

			@Override
			public String getMessageTemplate() {
				return null;
			}

			@Override
			public Object getRootBean() {
				return null;
			}

			@Override
			public Class<Object> getRootBeanClass() {
				return null;
			}

			@Override
			public Object getLeafBean() {
				return null;
			}

			@Override
			public Object[] getExecutableParameters() {
				return null;
			}

			@Override
			public Object getExecutableReturnValue() {
				return null;
			}

			@Override
			public Path getPropertyPath() {
				return null;
			}

			@Override
			public Object getInvalidValue() {
				return null;
			}

			@Override
			public ConstraintDescriptor<?> getConstraintDescriptor() {
				return null;
			}

			@Override
			public <U> U unwrap(Class<U> type) {
				return null;
			}

		};
	}
}
