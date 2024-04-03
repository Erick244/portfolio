package com.portfolio.server.models.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.server.models.entities.Technology;
import com.portfolio.server.models.enums.TechnologyCategory;

@Repository
public interface TechnologyRepository
		extends CrudRepository<Technology, Integer>, PagingAndSortingRepository<Technology, Integer> {

	Optional<Technology> findByName(String name);

	List<Technology> findAllByCategory(TechnologyCategory category);
}
