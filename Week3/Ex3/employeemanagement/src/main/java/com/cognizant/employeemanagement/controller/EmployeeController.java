package com.cognizant.employeemanagement.controller;

import com.cognizant.employeemanagement.model.Employee;
import com.cognizant.employeemanagement.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/employees")
    public ArrayList<Employee> getAllEmployees() {

        return employeeService.getAllEmployees();

    }

}