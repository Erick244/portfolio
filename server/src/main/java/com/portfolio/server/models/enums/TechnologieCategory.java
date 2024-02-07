package com.portfolio.server.models.enums;

public enum TechnologieCategory {
	BACKEND("BACKEND"),
	FRONTEND("FRONTEND");

	public final String category;

	private TechnologieCategory(String category) {
		this.category = category;
	}
}
