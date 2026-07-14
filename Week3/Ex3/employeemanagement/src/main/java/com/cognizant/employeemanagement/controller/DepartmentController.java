package com.cognizant.employeemanagement.controller;

import com.cognizant.employeemanagement.model.Department;
import com.cognizant.employeemanagement.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class DepartmentController {

    @Autowired
    DepartmentService service;

    @GetMapping("/departments")
    public ArrayList<Department> getAllDepartments() {

        return service.getAllDepartments();

    }

}