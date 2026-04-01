export interface EmployeeResponse {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  joinDate: string;
  currentSalary: number;
  employeeStatus: string;
}

export interface CreateEmployeeRequest {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  joinDate: string;
  currentSalary: number;
  employeeStatus: string;
}

export interface UpdateEmployeeRequest {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  joinDate: string;
  currentSalary: number;
  employeeStatus: string;
}
