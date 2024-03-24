package com.example.yoga.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.yoga.model.Training;
import com.example.yoga.repository.TrainingRepo;

@Service
public class TrainingService {
    @Autowired
	TrainingRepo tRepo;
	
	public List<Training> getAll() {
		
		return tRepo.findAll();
	}
	
	
	public List<Training> getTrainingById(long id) {
		
		return tRepo.getTrainingById(id);
	}
	
	
	
	public List<Training> getTrainingSortedByName(String dir) {
		
		if(dir.equalsIgnoreCase("asc")) {
			
			Sort  nameSort = Sort.by("name").ascending();
			
			return tRepo.findAll(nameSort);
		}
		else {
			
			Sort  nameSort = Sort.by("name").descending();
			
			return tRepo.findAll(nameSort);
		}
	}
	
	
	
	public Training postTraining(Training training) {
		
		return tRepo.save(training);	
	}
	
	public Training updateTraining(Training newTraining, Long id) {
		
		Training updatedTraining = tRepo.findById(id).get();
		
		if(updatedTraining == null) {
			
			return updatedTraining;
		}
		else {
			
			updatedTraining.setTrainingName(newTraining.getTrainingName());
			updatedTraining.setDuration(newTraining.getDuration());
			updatedTraining.setLocation(newTraining.getLocation());
			updatedTraining.setDate(newTraining.getDate());
		
			
			return tRepo.save(updatedTraining);
		}
	}
	
	public void deleteTraining(Long id) {
		
		tRepo.deleteById(id);
	}
	
	public void deleteAllTraining() {
		
		tRepo.deleteAll();
	}
}
