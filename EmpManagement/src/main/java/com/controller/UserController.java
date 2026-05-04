package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dto.UserDTO;
import com.entity.User;
import com.service.UserService;

@RestController
@CrossOrigin
public class UserController {

	@Autowired
	UserService serv;
	
	@PostMapping("/register")
	public String register(@RequestBody User u) {
		
		serv.register(u);
		
		return "User Registered Successfully";
		
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody UserDTO udto){
		
		User existinguser=serv.login(udto);
		
		if(existinguser!=null) {
			return ResponseEntity.ok(existinguser);
		}
		else {
			return ResponseEntity
			.status(HttpStatus.UNAUTHORIZED)
			.body("Username or password is wrong");
		}
		
	}
}
