package com.cognizant.employeemanagement.service;

import com.cognizant.employeemanagement.dao.EmployeeDao;
import com.cognizant.employeemanagement.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class EmployeeService {

    @Autowired
    EmployeeDao employeeDao;

    public ArrayList<Employee> getAllEmployees() {

        return employeeDao.getAllEmployees();

    }

}