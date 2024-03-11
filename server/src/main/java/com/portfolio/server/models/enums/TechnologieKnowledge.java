package com.portfolio.server.models.enums;

public enum TechnologieKnowledge {
	BASIC("BASIC"),
	INTERMEDIATE("INTERMEDIATE"),
	EXPERT("EXPERT");

	public final String knowledge;

	private TechnologieKnowledge(String knowledge) {
		this.knowledge = knowledge;
	}
}
