package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Employee;
import com.service.EmployeeService;

@RestController
@CrossOrigin
public class EmployeeController {

	@Autowired
	EmployeeService eser;
	
	@PostMapping("/addEmp")
	public String addEmp(@RequestBody Employee e) {
		return eser.addEmp(e);
	}
	
	// Find All employees
	@GetMapping("/getAllEmp")
	public List<Employee> findAll(){
		return eser.findAllEmp();
	}
	
	@GetMapping("/getEmp")
	public Employee getEmp(@RequestParam int empid) {
		return eser.findByEmpId(empid);
	}
	
	@DeleteMapping("/deleteEmp")
	public String deleteEmp(int empid) {
		return eser.deleteByEmpId(empid);
	}
	
	@PutMapping("/updateEmp")
	public String updateEmp(@RequestParam  int empid, @RequestBody Employee newemp) {
		return eser.updateEmp(empid, newemp);
	}
	
	@GetMapping("/ByFirstname")
	public List<Employee> findByFName(@RequestParam String firstname){
		return eser.findByFirstName(firstname);
	}
	
	
	@GetMapping("/ByLastname")
	public List<Employee> findByLName(@RequestParam String lastname){
		return eser.findByLastname(lastname);
	}
	
	@GetMapping("/ByDesignation")
	public List<Employee> findByDesignation(@RequestParam String designation){
		return eser.findByDesignation(designation);
	}
	
	@GetMapping("/ByDepartment")
	public List<Employee> findByDepartment(@RequestParam String department){
		return eser.findByDepartment(department);
	}
	
	@GetMapping("/ById")
	public Employee findByempid(@RequestParam int empid) {
		return eser.findByEmpId(empid);
	}
	
	@PostMapping("/addAll")
	public String addAll(@RequestBody List<Employee> e){
		return eser.addAll(e);
	}
	
	
}
