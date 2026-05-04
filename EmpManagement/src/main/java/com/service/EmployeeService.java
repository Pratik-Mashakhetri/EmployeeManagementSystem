package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Employee;
import com.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired 
	EmployeeRepository erep;
	
	// Add single employee record
	
	public String addEmp(Employee e) {
		
		erep.save(e);
		return "Employee Added Successfully";
	}
	
	// FInd all Employee
	
	public List<Employee> findAllEmp(){
		return erep.findAll();
	}
	
	
	//Find emp by id
	
	public Employee findByEmpId(int empid) {
		
		return erep.findById(empid).orElse(null);
		
		
	}
	
	//delete by empid
	public String deleteByEmpId(int empid) {
		Employee existingemp=erep.findById(empid).orElse(null);
		
		if(existingemp!=null) {
			erep.deleteById(empid);
			return "Employee Deleted Succesfully";
		}
		else {
			return "No Matchig Employee Found For Current Record";
		}
	}
	
	
	//update by eid
	
	public String updateEmp(int empid,Employee newemp) {
		
		Employee existingemp=erep.findById(empid).orElse(null);
		
		if(existingemp==null) {
			return "No matching record found for given emp";
		}
		
		if(newemp.getFirstname()==null &&
				newemp.getMiddlename()==null &&
				newemp.getLastname()==null &&
				newemp.getEmail()==null &&
				newemp.getDob()==null &&
				newemp.getContactno()==0 &&
				newemp.getGender()==null &&
				newemp.getEdu()==null &&
				newemp.getAddress()==null &&
				newemp.getAadharno()==0 &&
				newemp.getPanno()==null &&
				newemp.getProfile()==null &&
				newemp.getDepartment()==null &&
				newemp.getDesignation()==null &&
				newemp.getExp()==0 &&
				newemp.getSalary()==0.0 &&
				newemp.getWorklocation()==null &&
				newemp.getReportingmanager()==null &&
				newemp.getStatus()==null &&
				newemp.getJoiningdate()==null	
				) {
			return "No new record added";
		}
		
		if(newemp.getFirstname()!=null) {
			existingemp.setFirstname(newemp.getFirstname());
		}
		if(newemp.getMiddlename()!=null) {
			existingemp.setMiddlename(newemp.getMiddlename());
		}
		if(newemp.getLastname()!=null) {
			existingemp.setLastname(newemp.getLastname());
		}
		if(newemp.getEmail()!=null) {
			existingemp.setEmail(newemp.getEmail());
		}
		if(newemp.getDob()!=null) {
			existingemp.setDob(newemp.getDob());
		}
		if(newemp.getContactno()!=0) {
			existingemp.setContactno(newemp.getContactno());
		}
		if(newemp.getGender()!=null) {
			existingemp.setGender(newemp.getGender());
		}
		if(newemp.getEdu()!=null) {
			existingemp.setEdu(newemp.getEdu());
		}
		if(newemp.getAddress()!=null) {
			existingemp.setAddress(newemp.getAddress());
		}
		if(newemp.getAadharno()!=0) {
			existingemp.setAadharno(newemp.getAadharno());
		}
		if(newemp.getPanno()!=null) {
			existingemp.setPanno(newemp.getPanno());
		}
		if(newemp.getProfile()!=null) {
			existingemp.setProfile(newemp.getProfile());
		}
		if(newemp.getDepartment()!=null) {
			existingemp.setDepartment(newemp.getDepartment());
		}
		if(newemp.getDesignation()!=null) {
			existingemp.setDesignation(newemp.getDesignation());
		}
		if(newemp.getExp()!=0) {
			existingemp.setExp(newemp.getExp());
		}
		if(newemp.getSalary()!=0.0) {
			existingemp.setSalary(newemp.getSalary());
		}
		if(newemp.getWorklocation()!=null) {
			existingemp.setWorklocation(newemp.getWorklocation());
		}
		if(newemp.getReportingmanager()!=null) {
			existingemp.setReportingmanager(newemp.getReportingmanager());
		}
		if(newemp.getStatus()!=null) {
			existingemp.setStatus(newemp.getStatus());
		}
		if(newemp.getJoiningdate()!=null) {
			existingemp.setJoiningdate(newemp.getJoiningdate());
		}
		
		erep.save(existingemp);
		
		return "Employee Record Updated Successfully";
		
			
	}
	
	public List<Employee> findByFirstName(String firstname){
		return erep.findByFirstname(firstname);
	}
	
	public List<Employee> findByLastname(String lastname){
		return erep.findByLastname(lastname);
	}
	
	public List<Employee> findByDesignation(String designation){
		return erep.findByDesignation(designation);
	}
	
	public List<Employee> findByDepartment(String department){
		return erep.findByDepartment(department);
	}
	
	public Optional<Employee> findById(int empid) {
		return erep.findById(empid);
	}
	
	// Just To add multiple record at once NO USE IN THIS PROJECT
	public String addAll(List<Employee> e){
		 erep.saveAll(e);
		 return "Records Added Succesfully";
	}
	
}
