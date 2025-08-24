package com.example.testbe.dtos;

import com.example.testbe.entities.Gender;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class EmpoyeeRequestDto {

    @NotBlank
    @Size(min = 4, max = 160)
    private String fullName;

    @NotBlank
    @Email
    private String email;

    private LocalDate dateOfBirth;

    @NotNull
    private Gender gender;

    @NotBlank
    @Size(min = 10, max = 10)
    private String phoneNumber;
    private Boolean active;

    @NotBlank
    @Size(min = 6)
    private String password;
}
