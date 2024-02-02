package com.portfolio.server.models.entities;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "admins")
public class Admin implements UserDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String username;

	private String password;

	public Admin() {
	}

	public Admin(String username, String password) {
		this.username = username;
		this.password = password;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@JsonIgnore
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return Collections.emptyList();
	}

	@JsonIgnore
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@JsonIgnore
	public boolean isAccountNonExpired() {
		return true;
	}

	@JsonIgnore
	public boolean isAccountNonLocked() {
		return true;
	}

	@JsonIgnore
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@JsonIgnore
	public boolean isEnabled() {
		return true;
	}

	public int getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Admin [id=" + id + ", username=" + username + ", password=" + password + "]";
	}

}
