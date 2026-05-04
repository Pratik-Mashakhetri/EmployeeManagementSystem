package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

	
	// Registration to check username is duplicate or not
	// Login check username is valid or not
	public User findByUsername(String username);
	
	
	public User findByEmpid(int empid);
	
}
