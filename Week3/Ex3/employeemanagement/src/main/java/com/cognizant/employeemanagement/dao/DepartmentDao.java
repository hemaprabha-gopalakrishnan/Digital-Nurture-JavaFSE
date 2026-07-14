package com.cognizant.employeemanagement.dao;

import com.cognizant.employeemanagement.model.Department;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class DepartmentDao {

    private static ArrayList<Department> DEPARTMENT_LIST =
            new ArrayList<>();

    static {

        DEPARTMENT_LIST.add(new Department(1,"HR"));
        DEPARTMENT_LIST.add(new Department(2,"IT"));
        DEPARTMENT_LIST.add(new Department(3,"Finance"));

    }

    public ArrayList<Department> getAllDepartments() {

        return DEPARTMENT_LIST;

    }

}