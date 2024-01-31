package com.portfolio.server.models.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.portfolio.server.models.entities.Admin;

public interface AdminRepository extends CrudRepository<Admin, Integer> {

	Optional<Admin> findByUsername(String username);
}