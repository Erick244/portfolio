package com.portfolio.server.models.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.server.models.entities.Technologie;
import com.portfolio.server.models.enums.TechnologieCategory;

@Repository
public interface TechnologieRepository
		extends CrudRepository<Technologie, Integer>, PagingAndSortingRepository<Technologie, Integer> {

	Optional<Technologie> findByName(String name);

	List<Technologie> findAllByCategory(TechnologieCategory category);
}
