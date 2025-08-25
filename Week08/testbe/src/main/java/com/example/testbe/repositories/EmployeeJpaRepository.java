package com.example.testbe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.testbe.entities.Employee;

public interface EmployeeJpaRepository extends JpaRepository<Employee, Long> {
        boolean existsByEmail(String email);

}
