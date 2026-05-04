package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
	
	//Derived Methods for searching operations 
	//Search By firstname
	public List<Employee> findByFirstname(String firstname);
	
	//Search By Lastname
	public List<Employee> findByLastname(String lastname);
	
	//Search By  Designation
	public List<Employee> findByDesignation(String designation);
	
	//Search by Department
	public List<Employee> findByDepartment(String department);

}
