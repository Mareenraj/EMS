package com.mareenraj.api.dto.request;

import com.mareenraj.api.entity.EmployeeStatus;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import java.time.LocalDate;

public record CreateEmployeeRequest(
        @NotBlank(message = "First name is required.")
        String firstName,

        @NotBlank(message = "Last name is required.")
        String lastName,

        @NotBlank(message = "Address is required.")
        String address,

        @NotBlank(message = "Email is required.")
        @Email(message = "Email should be valid.")
        String email,

        @NotNull(message = "Join date is required.")
        LocalDate joinDate,

        @NotNull(message = "Current salary is required.")
        @Positive(message = "Salary should be positive.")
        Double currentSalary,

        @NotNull(message = "Employee status is required.")
        EmployeeStatus employeeStatus
) {
}
