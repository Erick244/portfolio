package com.portfolio.server.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.portfolio.server.models.dto.technology.SaveTechnologyDto;
import com.portfolio.server.models.enums.TechnologyCategory;
import com.portfolio.server.models.enums.TechnologyKnowledge;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity(name = "technologies")
public class Technology {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotNull(message = "The name cannot be null.")
	@Column(unique = true)
	private String name;

	@NotNull(message = "The knowledge cannot be null.")
	@Column(name = "knowledge")
	private TechnologyKnowledge knowledge;

	@NotNull(message = "The imageUrl cannot be null.")
	@Size(min = 0, max = 255, message = "The image URL cannot exceed 255 characters.")
	private String imageUrl;

	@NotNull(message = "The category cannot be null.")
	private TechnologyCategory category;

	@NotNull(message = "The about cannot be null.")
	@Size(min = 3, max = 150, message = "The about must be between 3 and 150 characters long.")
	private String about;

	@NotNull(message = "The color cannot be null.")
	private String color;

	@ManyToOne(cascade = CascadeType.MERGE)
	private Admin createdBy;

	public Technology() {
	}

	public Technology(String name, TechnologyKnowledge knowledge, String imageUrl, TechnologyCategory category,
			String about,
			String color, Admin createdBy) {
		this.name = name;
		this.knowledge = knowledge;
		this.imageUrl = imageUrl;
		this.category = category;
		this.about = about;
		this.color = color;
		this.createdBy = createdBy;
	}

	public Technology(SaveTechnologyDto dto, int id) {
		this.id = id;
		setAbout(dto.about());
		setCategory(dto.category());
		setColor(dto.color());
		setKnowledge(dto.knowledge());
		setImageUrl(dto.imageUrl());
		setName(dto.name());
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setKnowledge(TechnologyKnowledge knowledge) {
		this.knowledge = knowledge;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public void setCategory(TechnologyCategory category) {
		this.category = category;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public TechnologyKnowledge setKnowledge() {
		return knowledge;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public TechnologyCategory getCategory() {
		return category;
	}

	public String getAbout() {
		return about;
	}

	public String getColor() {
		return color;
	}

	@JsonIgnore
	public Admin getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(Admin createdBy) {
		this.createdBy = createdBy;
	}

	public TechnologyKnowledge getKnowledge() {
		return knowledge;
	}

}
