package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.LeaveApplication;
import com.repository.LeaveApplicationRepository;

@Service
public class LeaveApplicationService {

	@Autowired
	LeaveApplicationRepository leaverep;

	// APply For Leave
	public String applyforleave(LeaveApplication l) {
		l.setStatus("pending");
		leaverep.save(l);
		return "Applied For Leave Successfully";
	}

	// Find All Leave Details
	public List<LeaveApplication>findallleaves(){
		return leaverep.findAll();
	}

	//Cancel Leave Application

	public String cancelleave(int leaveid) {
		LeaveApplication existingleave=leaverep.findById(leaveid).orElse(null);
		if(existingleave!=null) {
			leaverep.deleteById(leaveid);
			return "Leave Cancelled Succesfully";
		}else {
			return "No Matching Record Found For leave ";
		}
	}


	// Update Leave Application


	public String updateleave(int leaveid, LeaveApplication newleave) {

		LeaveApplication existingleave=leaverep.findById(leaveid).orElse(null);

		if(existingleave==null) {

			return "No matching record found for given updation";

		}

		if(newleave.getReason()==null && newleave.getFromdate()==null && newleave.getTodate()==null) {
			return "No new data added for updation";
		}
		if(newleave.getReason()!=null) {
			existingleave.setReason(newleave.getReason());
		}
		if(newleave.getFromdate()!=null) {
			existingleave.setFromdate(newleave.getFromdate());
		}
		if(newleave.getTodate()!=null) {
			existingleave.setTodate(newleave.getTodate());
		}

		leaverep.save(existingleave);
		return "Leave Updated Succesfully...";
	}

	public String updateleavestatus(int leaveid, String action) {
		LeaveApplication existingleave=leaverep.findById(leaveid).orElse(null);

		if(existingleave!=null) {
			existingleave.setStatus(action);
			leaverep.save(existingleave);
			return "Leave status updated Succesfully";
		}
		else {
			return "No Matching Record Found For Gicen Leave ID";
		}
		
	}
   

	public List<LeaveApplication> findleavebyempid(int empid){
		return leaverep.findleavebyempid(empid);
	}
}
