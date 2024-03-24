package com.example.yoga.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.yoga.model.Yoga;
import com.example.yoga.repository.YogaRepo;

@Service
public class YogaService {
     
    @Autowired
	YogaRepo yRepo;
	
	public List<Yoga> getAll() {
		
		return yRepo.findAll();
	}
	
	
	public List<Yoga> getYogaById(long id) {
		
		return yRepo.getYogaById(id);
	}
	
	
	
	public List<Yoga> getYogaSortedByName(String dir) {
		
		if(dir.equalsIgnoreCase("asc")) {
			
			Sort  nameSort = Sort.by("name").ascending();
			
			return yRepo.findAll(nameSort);
		}
		else {
			
			Sort  nameSort = Sort.by("name").descending();
			
			return yRepo.findAll(nameSort);
		}
	}
	
	
	
	public Yoga postYoga(Yoga yoga) {
		
		return yRepo.save(yoga);	
	}
	
	public Yoga updateYoga(Yoga newYoga, Long id) {
		
		Yoga updatedYoga = yRepo.findById(id).get();
		
		if(updatedYoga == null) {
			
			return updatedYoga;
		}
		else {
			
			
			updatedYoga.setYogaName(newYoga.getYogaName());
			updatedYoga.setInstructor(newYoga.getInstructor());
			updatedYoga.setDayAndTime(newYoga.getDayAndTime());
		
			
			return yRepo.save(updatedYoga);
		}
	}
	
	public void deleteYoga(Long id) {
		
		yRepo.deleteById(id);
	}
	
	public void deleteAllYoga() {
		
		yRepo.deleteAll();
	}
}
