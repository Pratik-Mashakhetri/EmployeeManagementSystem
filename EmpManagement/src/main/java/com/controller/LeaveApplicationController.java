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

import com.entity.LeaveApplication;
import com.service.LeaveApplicationService;

@RestController
@CrossOrigin 
public class LeaveApplicationController {

	
	@Autowired
	LeaveApplicationService lser;
	
	@PostMapping("/applyForLeave")
	public String applyforleave(@RequestBody LeaveApplication l) {
		return lser.applyforleave(l);
	}
	
	@GetMapping("/findAllLeave")
	public List<LeaveApplication> findallleave(){
		return lser.findallleaves();
	}
	
	@DeleteMapping("/cancelLeave")
	public String cancelleave(@RequestParam int leaveid) {
		return lser.cancelleave(leaveid);
	}
	
	@PutMapping("/updateLeave")
	public String updateleave(@RequestParam int leaveid, @RequestBody LeaveApplication newleave) {
		return lser.updateleave(leaveid, newleave);
	}
	
	@PutMapping("/updateLeaveStatus")
	public String updateleavestatus(@RequestParam int leaveid, @RequestParam String action) {
		return lser.updateleavestatus(leaveid, action);
	}
	
	@GetMapping("/findAllLeaveByEmpId")
	public List<LeaveApplication> findAllLeaveByEmpId(@RequestParam  int empid) {
		return lser.findleavebyempid(empid);
	}
}
