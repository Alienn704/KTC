import axios from "axios";
import type {
  CreateEmployeeRequest,
  Employee,
  UpdateEmployeeRequest,
} from "../types/employee";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const getEmployees = (): Promise<Employee[]> =>
  api.get("/employees").then((res) => res.data);

export const createEmployee = (
  data: CreateEmployeeRequest
): Promise<Employee> => api.post("/employees", data).then((res) => res.data);

export const updateEmployee = (
  id: number,
  data: UpdateEmployeeRequest
): Promise<Employee> =>
  api.put(`/employees/${id}`, data).then((res) => res.data);

export const deleteEmployee = (id: number): Promise<void> =>
  api.delete(`/employees/${id}`).then(() => {});
