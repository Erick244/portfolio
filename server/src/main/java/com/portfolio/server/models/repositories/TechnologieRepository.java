package com.portfolio.server.models.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.server.models.entities.Technologie;

@Repository
public interface TechnologieRepository extends CrudRepository<Technologie, Integer> {

	Optional<Technologie> findByName(String name);
}
