package com.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="leave_application")
public class LeaveApplication {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int leaveid;
	
	String firstname;
	String lastname;
	LocalDate fromdate;
	LocalDate todate;
	String reason;
	
	String status="pending"; 	


	@ManyToOne
	@JoinColumn(name="employee_id")
	@JsonIgnoreProperties("leavelist")
	Employee employee;
	
	


	public Employee getEmployee() {
		return employee;
	}


	public void setEmployee(Employee employee) {
		this.employee = employee;
	}


	public LeaveApplication() {
		super();
	}


	public int getLeaveid() {
		return leaveid;
	}


	public void setLeaveid(int leaveid) {
		this.leaveid = leaveid;
	}


	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public LocalDate getFromdate() {
		return fromdate;
	}


	public void setFromdate(LocalDate fromdate) {
		this.fromdate = fromdate;
	}


	public LocalDate getTodate() {
		return todate;
	}


	public void setTodate(LocalDate todate) {
		this.todate = todate;
	}


	public String getReason() {
		return reason;
	}


	public void setReason(String reason) {
		this.reason = reason;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}



	

	
	

}
