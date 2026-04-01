import axios from "axios";
import type {
  EmployeeResponse,
  CreateEmployeeRequest,
  UpdateEmployeeRequest,
} from "../types/employee";

const API = "http://localhost:8080/api/v1/employees";

// Get All
export const getAllEmployees = async (): Promise<EmployeeResponse[]> => {
  const res = await axios.get<EmployeeResponse[]>(API);
  return res.data;
};

//Get Employee By Id
export const getEmployeeById = async (
  id: number,
): Promise<EmployeeResponse> => {
  const res = await axios.get<EmployeeResponse>(`${API}/${id}`);
  return res.data;
};

// Create
export const createEmployee = async (
  data: CreateEmployeeRequest,
): Promise<EmployeeResponse> => {
  const res = await axios.post<EmployeeResponse>(API, data);
  return res.data;
};

// update
export const updateEmployee = async (
  id: number,
  data: UpdateEmployeeRequest,
): Promise<EmployeeResponse> => {
  const res = await axios.put<EmployeeResponse>(`${API}/${id}`, data);
  return res.data;
};

// Delete
export const deleteEmployee = async (id: number): Promise<void> => {
  await axios.delete<void>(`${API}/${id}`);
};
