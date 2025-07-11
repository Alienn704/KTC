import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import TasksManaPage from "./Pages/TasksManaPage";
import MyTasksPage from "./Pages/MyTasksPage";
import LoginPage from "./Pages/LoginPage";
import CreateTaskPage from "./Pages/CreateTaskPage";
import UpdateTaskPage from "./Pages/UpdateTaskPage";
import { useEffect, useState } from "react";
import AuthContext from "./context";
import type { User } from "./types";
import AccessDeniedPage from "./Pages/AccessDeniedPage";
// import Header from "./components/header";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = async () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        {/* {user && <Header />} */}
        {user && <button onClick={handleLogout}>Logout</button>}
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<AccessDeniedPage />} />

          {user && <Route path="/tasks" element={<TasksManaPage />} />}
          {user && <Route path="/create-task" element={<CreateTaskPage />} />}
          {user && <Route path="/my-tasks" element={<MyTasksPage />} />}
          {user && <Route path="/update" element={<UpdateTaskPage />} />}
          {user && <Route path="/tasks/:id/update" element={<UpdateTaskPage />} />}
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
