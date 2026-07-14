package com.cognizant.employeemanagement.service;

import com.cognizant.employeemanagement.dao.DepartmentDao;
import com.cognizant.employeemanagement.model.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class DepartmentService {

    @Autowired
    DepartmentDao dao;

    public ArrayList<Department> getAllDepartments() {

        return dao.getAllDepartments();

    }

}