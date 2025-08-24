export interface Employee {
  id: number;
  fullName: string;
  email: string;
  dateOfBirth: string | null;
  gender: "Nam" | "Nu" | "Khac";
  phoneNumber: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateEmployeeRequest {
  fullName: string;
  email: string;
  dateOfBirth?: string | null;
  gender?: "Nam" | "Nu" | "Khac";
  phoneNumber: string;
  active: boolean;
  password: string;
}

export interface UpdateEmployeeRequest {
  fullName: string;
  dateOfBirth?: string | null;
  gender?: "Nam" | "Nu" | "Khac";
  phoneNumber: string;
  active: boolean;
  password?: string | null;
}
