package com.mareenraj.api.dto.response;

import java.time.LocalDate;

public record EmployeeResponse(
        Long id,
        String firstName,
        String lastName,
        String address,
        String email,
        LocalDate joinDate,
        double currentSalary,
        String employeeStatus
) {
}
