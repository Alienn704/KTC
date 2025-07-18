// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import LoginPage from "./pages/LoginPage";
import TaskPage from "./pages/TaskPage";
import { useAuthStore } from "./useAuthStore";
import CreateTaskPage from "./pages/CreateTaskPage";

function App() {
  const { loggedInUser } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<CreateTaskPage />} />
        <Route
          path="/tasks"
          element={
            loggedInUser ? <TaskPage /> : <Navigate to="/login" replace />
          }
        />
        {/* Redirect all unknown paths to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
