"use client";

import { BrowserRouter, Routes, Route, NavLink } from "react-router";
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
        <div className="min-h-screen bg-gray-50">
          {user && (
            <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <NavLink
                        to="/tasks"
                        className="text-2xl font-bold text-gray-900"
                      >
                        Tasks Management
                      </NavLink>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <NavLink
                        to="/tasks"
                        className={({ isActive }) =>
                          `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                            isActive
                              ? "bg-blue-100 text-blue-700 border border-blue-200"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                          }`
                        }
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                          All Tasks
                        </div>
                      </NavLink>

                      <NavLink
                        to="/my-tasks"
                        className={({ isActive }) =>
                          `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                            isActive
                              ? "bg-blue-100 text-blue-700 border border-blue-200"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                          }`
                        }
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          My Tasks
                        </div>
                      </NavLink>

                      <NavLink
                        to="/create-task"
                        className={({ isActive }) =>
                          `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                            isActive
                              ? "bg-green-100 text-green-700 border border-green-200"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                          }`
                        }
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                          Create Task
                        </div>
                      </NavLink>
                    </div>
                  </div>

                  {/* User Menu */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleLogout}
                      className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      <svg
                        className="h-4 w-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          )}

          <main className={user ? "pt-0" : "pt-16"}>
            <Routes>
              <Route index element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/*" element={<AccessDeniedPage />} />
              {user && <Route path="/tasks" element={<TasksManaPage />} />}
              {user && (
                <Route path="/create-task" element={<CreateTaskPage />} />
              )}
              {user && <Route path="/my-tasks" element={<MyTasksPage />} />}
              {user && <Route path="/update" element={<UpdateTaskPage />} />}
              {user && (
                <Route path="/tasks/:id/update" element={<UpdateTaskPage />} />
              )}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
