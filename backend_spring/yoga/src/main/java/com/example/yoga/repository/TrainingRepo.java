package com.example.yoga.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.yoga.model.Training;

import jakarta.transaction.Transactional;

@Repository
public interface TrainingRepo extends JpaRepository<Training,Long>{
    @Transactional
	// @Query(value="select c from training_details c where c.id = :id", nativeQuery = true)
	public List<Training> getTrainingById(@Param("id") long id);
}
