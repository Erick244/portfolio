package com.portfolio.server.models.dto.project;

public record SaveProjectDto(String name, String imageUrl, String repoUrl, String siteUrl, String description,
		String color) {

}
