package com.example.yoga.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.yoga.model.Yoga;

import jakarta.transaction.Transactional;

@Repository
public interface YogaRepo extends JpaRepository<Yoga,Long>{
    @Transactional
	
	public List<Yoga> getYogaById(@Param("id") long id);
}
