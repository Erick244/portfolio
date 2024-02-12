package com.portfolio.server.models.dto.technologie;

import com.portfolio.server.models.enums.TechnologieCategory;

public record SaveTechnologieDto(String name, String experience, String imageUrl, TechnologieCategory category,
		String about, String color) {

}
