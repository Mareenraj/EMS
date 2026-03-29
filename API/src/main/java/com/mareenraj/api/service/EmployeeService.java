package com.mareenraj.api.service;

import com.mareenraj.api.dto.request.CreateEmployeeRequest;
import com.mareenraj.api.dto.request.UpdateEmployeeRequest;
import com.mareenraj.api.dto.response.EmployeeResponse;
import com.mareenraj.api.entity.Employee;
import com.mareenraj.api.exception.EmployeeNotFoundException;
import com.mareenraj.api.mapper.EmployeeMapper;
import com.mareenraj.api.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    private final EmployeeMapper employeeMapper;

    public EmployeeService(EmployeeRepository employeeRepository, EmployeeMapper employeeMapper) {
        this.employeeRepository = employeeRepository;
        this.employeeMapper = employeeMapper;
    }

    @Transactional
    public EmployeeResponse createEmployee(CreateEmployeeRequest createEmployeeRequest) {
        Employee employee = employeeMapper.toEmployeeEntity(createEmployeeRequest);
        Employee savedEmployee = employeeRepository.save(employee);
        return employeeMapper.toEmployeeResponse(savedEmployee);
    }

    public List<EmployeeResponse> getAllEmployees() {
        List<Employee> employeeList = employeeRepository.findAll();
        return employeeMapper.toEmployeeResponseList(employeeList);
    }

    public EmployeeResponse getEmployeeById(Long id) {
        Employee employee = findEmployeeOrThrowAnException(id);
        return employeeMapper.toEmployeeResponse(employee);
    }

    @Transactional
    public EmployeeResponse updateEmployee(Long id, UpdateEmployeeRequest updateEmployeeRequest) {
        Employee employee = findEmployeeOrThrowAnException(id);
        employee.setFirstName(updateEmployeeRequest.firstName());
        employee.setLastName(updateEmployeeRequest.lastName());
        employee.setAddress(updateEmployeeRequest.address());
        employee.setEmail(updateEmployeeRequest.email());
        employee.setJoinDate(updateEmployeeRequest.joinDate());
        employee.setCurrentSalary(updateEmployeeRequest.currentSalary());
        employee.setEmployeeStatus(updateEmployeeRequest.employeeStatus());
        return employeeMapper.toEmployeeResponse(employee);
    }

    @Transactional
    public void deleteEmployee(Long id) {
        findEmployeeOrThrowAnException(id);
        employeeRepository.deleteById(id);
    }

    private Employee findEmployeeOrThrowAnException(Long id) {
        return employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee not found."));
    }
}
