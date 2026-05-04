package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dto.UserDTO;
import com.entity.User;
import com.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository urep;


	public String register(User u) {

		User existinguser= urep.findByUsername(u.getUsername());
		User existingempid= urep.findByEmpid(u.getEmpid());
		
		if(existingempid!=null) {
			return "Emp Id already Exits";
		}
		else if(existinguser!=null) {
			return "Username already exists...";
		}
		else {
			urep.save(u);

			return "User Registration Succesfull";
			
		}
	}

/// SELF Add To check whether the pass is wrong or usernamae.....................................
	public User login(UserDTO udto) {

		User existinguser=urep.findByUsername(udto.getUsername());

		if(existinguser!=null && existinguser.getPassword().equals(udto.getPassword())) {

			return existinguser;
		}
		else {
			
			return null;
		}
	}
}
