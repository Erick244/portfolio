package com.portfolio.server.models.dto.technologie;

import com.portfolio.server.models.enums.TechnologieCategory;
import com.portfolio.server.models.enums.TechnologieKnowledge;

public record SaveTechnologieDto(String name, TechnologieKnowledge knowledge, String imageUrl,
		TechnologieCategory category,
		String about, String color) {

}
