package com.portfolio.server.models.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.server.models.entities.Admin;

@Repository
public interface AdminRepository extends CrudRepository<Admin, Integer> {

	Optional<Admin> findByUsername(String username);
}