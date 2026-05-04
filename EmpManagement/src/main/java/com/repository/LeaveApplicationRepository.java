package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.entity.LeaveApplication;

@Repository	
public interface LeaveApplicationRepository extends JpaRepository<LeaveApplication,Integer>{

	@Query(value="select * from leave_application where employee_id=:empid",nativeQuery=true)
	public List<LeaveApplication>findleavebyempid(int empid);
}
