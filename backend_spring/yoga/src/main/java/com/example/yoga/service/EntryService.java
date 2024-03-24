package com.example.yoga.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.yoga.dto.AuthenticationRequest;
import com.example.yoga.dto.AuthenticationResponse;
import com.example.yoga.dto.RegisterRequest;
import com.example.yoga.model.User;
import com.example.yoga.model.enumerate.Role;
import com.example.yoga.repository.UserRepo;
import com.example.yoga.util.JwtService;

@Service
public class EntryService {
    @Autowired
	UserRepo uRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	public AuthenticationResponse validateUser(AuthenticationRequest request) {
		
		authenticationManager.authenticate(
				
			new UsernamePasswordAuthenticationToken(
					request.getEmail(), request.getPassword()
				)
		);
		
		var user = uRepo.findByEmail(request.getEmail()).orElseThrow();
		
		var jwtToken = jwtService.generateToken(user);
		
		return AuthenticationResponse.builder()
				.token(jwtToken)
		
				
				.build();
		
	}
	
	
	public AuthenticationResponse CreateNewUser(RegisterRequest request) {
		
		
		var user = User.builder()
				.name(request.getName())
				.phoneno(request.getPhoneno())
				.dob(request.getDob())
				.email(request.getEmail())
				.password(passwordEncoder.encode(request.getPassword()))
				.role(Role.USER)
				.build();
				
		
		List<Integer> emailCountList = uRepo.isEmailExist(user.getEmail());
		List<Integer> phnoCountList = uRepo.isPhnoExist(user.getPhoneno());
		
		if(emailCountList.get(0) !=  0) {
			
			return null;
		}
		else if(phnoCountList.get(0) != 0) {
			
			return null;
		}
		else {
			
			uRepo.save(user);
			
			var jwtToken = jwtService.generateToken(user);
			
			return AuthenticationResponse.builder()
					.token(jwtToken)
					.build();
		}
	}
}
