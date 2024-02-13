package com.portfolio.server.models.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity(name = "projects")
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotNull(message = "The name cannot be null.")
	@Column(unique = true)
	private String name;

	@Column(nullable = true)
	private String imageUrl;

	@NotNull(message = "The repository URL cannot be null.")
	private String repoUrl;

	@Column(nullable = true)
	private String siteUrl;

	@NotNull(message = "The description cannot be null.")
	@Size(min = 3, max = 150, message = "The description must be between 3 and 150 characters long.")
	private String description;

	@NotNull(message = "The color cannot be null.")
	private String color;

	@ManyToOne(cascade = CascadeType.MERGE)
	private Admin createdBy;

	public Project(String name, String imageUrl, String repoUrl, String siteUrl, String description, String color,
			Admin createdBy) {
		this.name = name;
		this.imageUrl = imageUrl;
		this.repoUrl = repoUrl;
		this.siteUrl = siteUrl;
		this.description = description;
		this.color = color;
		this.createdBy = createdBy;
	}

	public Project() {
	}

	public String getName() {
		return name;
	}

	public Admin getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(Admin createdBy) {
		this.createdBy = createdBy;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getRepoUrl() {
		return repoUrl;
	}

	public void setRepoUrl(String repoUrl) {
		this.repoUrl = repoUrl;
	}

	public String getSiteUrl() {
		return siteUrl;
	}

	public void setSiteUrl(String siteUrl) {
		this.siteUrl = siteUrl;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public int getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Project [id=" + id + ", name=" + name + ", imageUrl=" + imageUrl + ", repoUrl=" + repoUrl + ", siteUrl="
				+ siteUrl + ", description=" + description + ", color=" + color + ", createdBy=" + createdBy + "]";
	}

}
