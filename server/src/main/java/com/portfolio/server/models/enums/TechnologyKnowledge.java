package com.portfolio.server.models.enums;

public enum TechnologyKnowledge {
	BASIC("BASIC"),
	INTERMEDIATE("INTERMEDIATE"),
	EXPERT("EXPERT");

	public final String knowledge;

	private TechnologyKnowledge(String knowledge) {
		this.knowledge = knowledge;
	}
}
