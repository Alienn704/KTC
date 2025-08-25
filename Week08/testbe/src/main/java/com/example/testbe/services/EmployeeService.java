package com.example.testbe.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.testbe.dtos.CreateEmployeeRequestDto;
import com.example.testbe.dtos.EmployeeResponseDto;
import com.example.testbe.dtos.UpdateEmployeeRequestDto;
import com.example.testbe.entities.Employee;
import com.example.testbe.exceptions.HttpException;
import com.example.testbe.exceptions.ResourceNotFoundException;
import com.example.testbe.repositories.EmployeeJpaRepository;

import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeJpaRepository employeeRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    private EmployeeResponseDto mapToResponse(Employee employee) {
        
        return EmployeeResponseDto.builder()
                .id(employee.getId())
                .fullName(employee.getFullName())
                .email(employee.getEmail())
                .dateOfBirth(employee.getDateOfBirth())
                .gender(employee.getGender())
                .phoneNumber(employee.getPhoneNumber())
                .active(employee.getActive())
                .createdAt(employee.getCreatedAt())
                .updatedAt(employee.getUpdatedAt())
                .build();
    }


    // Create employee
    public EmployeeResponseDto createEmployee(CreateEmployeeRequestDto dto){
         if (employeeRepository.existsByEmail(dto.getEmail())) {
            throw new HttpException("Email đã tồn tại", HttpStatus.CONFLICT);
        }
        Employee employee = Employee.builder()
                .fullName(dto.getFullName())
                .email(dto.getEmail())
                .dateOfBirth(dto.getDateOfBirth())
                .gender(dto.getGender())
                .phoneNumber(dto.getPhoneNumber())
                .active(dto.getActive())
                .hashedPassword(passwordEncoder.encode(dto.getPassword()))
                .build();

        employee = employeeRepository.save(employee);
        return mapToResponse(employee);
    }

    // Get All employees
    public List<EmployeeResponseDto> getAllEmployees() {
        return employeeRepository.findAll().stream()
        .map(this::mapToResponse)
        .collect(Collectors.toList());
        
    }

    // Get employee by Id
    public EmployeeResponseDto getEmployeeById(Long id){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found " + id));
        return mapToResponse(employee);
    }

    // Update employee
    public EmployeeResponseDto updateEmployee(Long id, UpdateEmployeeRequestDto dto){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found " + id));

        employee.setFullName(dto.getFullName());
        employee.setDateOfBirth(dto.getDateOfBirth());
        employee.setGender(dto.getGender());
        employee.setPhoneNumber(dto.getPhoneNumber());
        employee.setActive(dto.getActive());

        employee = employeeRepository.save(employee);
        return mapToResponse(employee);
    }

    // Delete employee
    public void deleteEmployee(Long id) {
        if(!employeeRepository.existsById(id)){
            throw new ResourceNotFoundException("Employee not found" + id);
        }
        employeeRepository.deleteById(id);
    }

}
// id	Long	Khóa chính, tự động tăng
// fullName	String	Họ và tên nhân sự, tối thiểu 4 và tối đa 160 ký tự.
// email	String	Email, unique , Đúng định dạng email
// dateOfBirth	LocalDate	Ngày sinh
// gender	Enum	Nam, Nữ, Khác
// phoneNumber	String	Số điện thoại, Đủ 10 kí tự.
// active	Boolean	Trạng thái hoạt động
// hashedPassword	String	Mật khẩu đã mã hóa (lưu vào DB)
// createdAt	LocalDateTime	Ngày tạo
// updatedAt	LocalDateTime	Ngày cập nhật