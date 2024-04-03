package com.portfolio.server.models.enums;

public enum TechnologyCategory {
	BACKEND("BACKEND"),
	FRONTEND("FRONTEND");

	public final String category;

	private TechnologyCategory(String category) {
		this.category = category;
	}
}
