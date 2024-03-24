package com.example.yoga.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.yoga.model.User;
import com.example.yoga.repository.UserRepo;

@Service
public class UserService {
    @Autowired
	UserRepo uRepo;
	
	public List<User> getAll() {	
		return uRepo.findAll();
	}
}
