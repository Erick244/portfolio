package com.portfolio.server.models.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.server.models.entities.Achievement;

@Repository
public interface AchievementRepository
		extends CrudRepository<Achievement, Integer>, PagingAndSortingRepository<Achievement, Integer> {

	Optional<Achievement> findByTitle(String title);
}
