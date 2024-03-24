package com.example.yoga.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.yoga.constant.Api;
import com.example.yoga.dto.AuthenticationRequest;
import com.example.yoga.dto.AuthenticationResponse;
import com.example.yoga.dto.RegisterRequest;
import com.example.yoga.service.EntryService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.ENTRY)
@RequiredArgsConstructor
public class EntryController {
    @Autowired
	EntryService eService;
	
	
	
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(value = "/post",  consumes = "application/json")
	public ResponseEntity<AuthenticationResponse> CreateNewUser(@RequestBody RegisterRequest request) {
		
		return ResponseEntity.ok(eService.CreateNewUser(request));
	}
	@ResponseStatus(HttpStatus.OK)
	@PostMapping(value = "/auth_user")
	public ResponseEntity<AuthenticationResponse> validateUser(@RequestBody AuthenticationRequest request) {

		return ResponseEntity.ok(eService.validateUser(request));
	}
}
