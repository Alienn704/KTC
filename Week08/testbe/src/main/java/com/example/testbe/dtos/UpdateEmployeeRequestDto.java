package com.example.testbe.dtos;

import java.time.LocalDate;

import com.example.testbe.enums.Gender;

import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class UpdateEmployeeRequestDto {

    @Size(min = 4, max = 160, message = "Full name must be between 4 and 160 characters")
    private String fullName;

    @Past(message = "Date of birth must be in the past")
    private LocalDate dateOfBirth;

    private Gender gender;

    @Pattern(regexp = "\\d{10}", message = "Phone number must have 10 digits")
    private String phoneNumber;

    private Boolean active;

    @Size(min = 6, max = 50, message = "Password must be between 6 and 50 characters")
    private String password;

}
