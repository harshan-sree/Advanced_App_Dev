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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.yoga.constant.Api;
import com.example.yoga.model.Yoga;
import com.example.yoga.service.YogaService;

@RestController
@RequestMapping(Api.CONTACT)
public class YogaController {
    @Autowired
	YogaService yService;
	
	
	@GetMapping("/getAllYoga")
	public ResponseEntity<List<Yoga>> getAll() {

	    List<Yoga> allYoga = yService.getAll();
	    return ResponseEntity.ok(allYoga);
	}
	
	

	@GetMapping("/getYogaClass/{id}")
	public ResponseEntity<List<Yoga>> getYogaByUserId(@PathVariable("id") long id) {

	    List<Yoga> yoga = yService.getYogaById(id);
	  
	    return ResponseEntity.ok(yoga);
	}
	
	@GetMapping("/getSortedYoga/{dir}")
	public ResponseEntity<List<Yoga>> getYogaSortedByName(@PathVariable("dir") String dir) {

	    List<Yoga> sortedYogas = yService.getYogaSortedByName(dir);
	    return ResponseEntity.ok(sortedYogas);
	}
	
	
	
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(value = "/post/yoga", produces = "application/json", consumes = "application/json")
	public ResponseEntity<Yoga> postYoga(@RequestBody Yoga yoga) {

	    Yoga createdYoga = yService.postYoga(yoga);
	    return ResponseEntity.ok(createdYoga);
	}
	
	
	
	@PutMapping("/updateYoga/{id}")
	public ResponseEntity<Yoga> updateContact(@RequestBody Yoga yoga, @PathVariable("id") Long id) {

	   Yoga updatedYoga = yService.updateYoga(yoga, id);
	    
	    return ResponseEntity.ok(updatedYoga);
	}
	
	
	
	@DeleteMapping("/deleteYoga/{id}")
	public ResponseEntity<Void> deleteYoga(@PathVariable("id") Long id) {

	    yService.deleteYoga(id);
	    return ResponseEntity.ok().build();
	}
	
	
	
	@DeleteMapping("/deleteAllYoga")
	public ResponseEntity<Void> deleteAllContacts() {

	    yService.deleteAllYoga();
	    return ResponseEntity.ok().build();
	}
}
