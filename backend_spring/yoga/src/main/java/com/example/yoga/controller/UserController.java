package com.example.yoga.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.yoga.constant.Api;
import com.example.yoga.model.User;
import com.example.yoga.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequestMapping(Api.USER)
public class UserController {
    @Autowired
	UserService uService;
	@GetMapping("/getAll")
	public List<User> getAll() {
		
		return uService.getAll();
	}
}
