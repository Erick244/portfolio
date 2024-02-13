package com.portfolio.server.models.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.server.models.entities.Project;

@Repository
public interface ProjectRepository
		extends CrudRepository<Project, Integer>, PagingAndSortingRepository<Project, Integer> {

	Optional<Project> findByName(String name);
}
