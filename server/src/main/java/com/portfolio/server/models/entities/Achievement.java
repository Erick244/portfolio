package com.portfolio.server.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.portfolio.server.models.dto.achievement.SaveAchievementDto;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;

@Entity(name = "jorney")
public class Achievement {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotNull(message = "The title cannot be null.")
	@Column(unique = true)
	private String title;

	@NotNull(message = "The date cannot be null.")
	private String dateFormated;

	@NotNull(message = "The color cannot be null.")
	private String color;

	@ManyToOne(cascade = CascadeType.MERGE)
	private Admin createdBy;

	public Achievement() {
	}

	public Achievement(String title, String dateFormated, String color, Admin createdBy) {
		this.title = title;
		this.dateFormated = dateFormated;
		this.color = color;
		this.createdBy = createdBy;
	}

	public Achievement(SaveAchievementDto dto, int id) {
		this.id = id;
		setColor(dto.color());
		setDateFormated(dto.dateFormated());
		setTitle(dto.title());
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDateFormated() {
		return dateFormated;
	}

	public void setDateFormated(String dateFormated) {
		this.dateFormated = dateFormated;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	@JsonIgnore
	public Admin getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(Admin createdBy) {
		this.createdBy = createdBy;
	}

	public int getId() {
		return id;
	}

}
