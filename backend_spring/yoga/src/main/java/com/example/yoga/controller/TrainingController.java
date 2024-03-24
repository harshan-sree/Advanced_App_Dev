package com.example.yoga.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.yoga.constant.Api;
import com.example.yoga.model.Training;
import com.example.yoga.service.TrainingService;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping(Api.CONTACT)

public class TrainingController {
    @Autowired
	TrainingService tService;
	
	
	@GetMapping("/getAllTraining")
	public ResponseEntity<List<Training>> getAll() {

	    List<Training> allTraining = tService.getAll();
	    return ResponseEntity.ok(allTraining);
	}
	
	@GetMapping("/getTrainingContact/{id}")
	public ResponseEntity<List<Training>> getTrainingByUserId(@PathVariable("id") long id) {

	    List<Training> training = tService.getTrainingById(id);
	  
	    return ResponseEntity.ok(training);
	}
	
	@GetMapping("/getSortedTrainings/{dir}")
	public ResponseEntity<List<Training>> getTrainingSortedByName(@PathVariable("dir") String dir) {

	    List<Training> sortedTraining = tService.getTrainingSortedByName(dir);
	    return ResponseEntity.ok(sortedTraining);
	}
	
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(value = "/post/training", produces = "application/json", consumes = "application/json")
	public ResponseEntity<Training> postTraining(@RequestBody Training training) {

	    Training createdTraining = tService.postTraining(training);
	    return ResponseEntity.ok(createdTraining);
	}
	
	@PutMapping("/updateTraining/{id}")
	public ResponseEntity<Training> updateContact(@RequestBody Training training, @PathVariable("id") Long id) {

	   Training updatedTraining = tService.updateTraining(training, id);
	    
	    return ResponseEntity.ok(updatedTraining);
	}
	
	@DeleteMapping("/deleteTraining/{id}")
	public ResponseEntity<Void> deleteTraining(@PathVariable("id") Long id) {

	    tService.deleteTraining(id);
	    return ResponseEntity.ok().build();
	}
	
	@DeleteMapping("/deleteAllTraining")
	public ResponseEntity<Void> deleteAllContacts() {
	    tService.deleteAllTraining();
	    return ResponseEntity.ok().build();
	}
}
