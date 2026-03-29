package com.mareenraj.api.mapper;

import com.mareenraj.api.dto.request.CreateEmployeeRequest;
import com.mareenraj.api.dto.response.EmployeeResponse;
import com.mareenraj.api.entity.Employee;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class EmployeeMapper {

    public Employee toEmployeeEntity(CreateEmployeeRequest createEmployeeRequest) {
        Employee employee = new Employee();
        employee.setFirstName(createEmployeeRequest.firstName());
        employee.setLastName(createEmployeeRequest.lastName());
        employee.setAddress(createEmployeeRequest.address());
        employee.setEmail(createEmployeeRequest.email());
        employee.setJoinDate(createEmployeeRequest.joinDate());
        employee.setCurrentSalary(createEmployeeRequest.currentSalary());
        employee.setEmployeeStatus(createEmployeeRequest.employeeStatus());
        return employee;
    }

    public EmployeeResponse toEmployeeResponse(Employee employee) {
        return new EmployeeResponse(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getAddress(),
                employee.getEmail(),
                employee.getJoinDate(),
                employee.getCurrentSalary(),
                employee.getEmployeeStatus().getValue()
        );
    }

    public List<EmployeeResponse> toEmployeeResponseList(List<Employee> employeeList) {
        return employeeList.stream().map(this::toEmployeeResponse).toList();
    }
}
