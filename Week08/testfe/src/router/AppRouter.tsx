import { Routes, Route } from "react-router-dom";
import EmployeePage from "../pages/EmployeePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<EmployeePage />} />
    </Routes>
  );
}
