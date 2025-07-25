package com.example.demo.services;

import com.example.demo.entities.Student;
import com.example.demo.repositories.StudentJpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentJpaRepository studentJpaRepository;

    public StudentService(StudentJpaRepository studentJpaRepository) {
        this.studentJpaRepository = studentJpaRepository;
    }

    // Lấy tất cả sinh viên
    public List<Student> getAllStudents() {
        return studentJpaRepository.findAll();
    }

    // Lấy sinh viên theo ID
    public Optional<Student> getStudentById(Long id) {
        return studentJpaRepository.findById(id);
    }

    // Thêm sinh viên mới
    public Student createStudent(Student student) {
        return studentJpaRepository.save(student);
    }

    // Cập nhật sinh viên
    public Student updateStudent(Long id, Student newStudentData) {
        return studentJpaRepository.findById(id)
                .map(student -> {
                    student.setName(newStudentData.getName());
                    student.setEmail(newStudentData.getEmail());
                    return studentJpaRepository.save(student);
                })
                .orElse(null);
    }
    
    // Xóa sinh viên
    public void deleteStudent(Long id) {
        studentJpaRepository.deleteById(id);
    }
}
