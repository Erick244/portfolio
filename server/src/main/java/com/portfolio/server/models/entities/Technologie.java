package com.portfolio.server.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.portfolio.server.models.enums.TechnologieCategory;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity(name = "technologies")
public class Technologie {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotNull(message = "The name cannot be null.")
	@Column(unique = true)
	private String name;

	@NotNull(message = "The experience cannot be null.")
	private String experience;

	@NotNull(message = "The imageUrl cannot be null.")
	private String imageUrl;

	@NotNull(message = "The category cannot be null.")
	private TechnologieCategory category;

	@NotNull(message = "The about cannot be null.")
	@Size(min = 3, max = 150, message = "The about must be between 3 and 150 characters long.")
	private String about;

	@NotNull(message = "The color cannot be null.")
	private String color;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
	private Admin createdBy;

	public Technologie() {
	}

	public Technologie(String name, String experience, String imageUrl, TechnologieCategory category, String about,
			String color, Admin createdBy) {
		this.name = name;
		this.experience = experience;
		this.imageUrl = imageUrl;
		this.category = category;
		this.about = about;
		this.color = color;
		this.createdBy = createdBy;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public void setCategory(TechnologieCategory category) {
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

	public String getExperience() {
		return experience;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public TechnologieCategory getCategory() {
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

}
