package com.portfolio.server.models.dto.technology;

import com.portfolio.server.models.enums.TechnologyCategory;
import com.portfolio.server.models.enums.TechnologyKnowledge;

public record SaveTechnologyDto(String name, TechnologyKnowledge knowledge, String imageUrl,
		TechnologyCategory category,
		String about, String color) {

}
