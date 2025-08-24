package com.example.testbe.exceptions;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ExceptionDto> handleNotFound(ResourceNotFoundException ex, WebRequest request) {
        ExceptionDto dto = new ExceptionDto(LocalDateTime.now(), ex.getMessage(), request.getDescription(false));
        return new ResponseEntity<>(dto, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ExceptionDto> handleGenral(Exception ex, WebRequest request) {
        ExceptionDto dto = new ExceptionDto(LocalDateTime.now(), ex.getMessage(), request.getDescription(false));
        return new ResponseEntity<>(dto, HttpStatus.INTERNAL_SERVER_ERROR);
    }

   

}
