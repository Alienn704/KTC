"use client";

import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../service";
import type { Task } from "../types";
import { useNavigate } from "react-router";
import Filter from "../components/Filter";

const TasksManaPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[] | null>(null);
  const navigate = useNavigate();

  const formatDate = (date?: Date) =>
    date ? new Date(date).toLocaleDateString() : "";

  const handleEdit = (id: string | number) => {
    navigate(`${id}/update`);
  };

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id: string | number) => {
    if (window.confirm("Bạn có chắc muốn xoá task này không?")) {
      try {
        await deleteTask(id);
        alert("Xoá thành công");
        fetchTasks();
      } catch (err: any) {
        alert("Xoá thất bại: " + err.message);
        console.error("DELETE error:", err);
      }
    }
  };

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      to_do: "bg-gray-100 text-gray-800 border-gray-200",
      in_progress: "bg-blue-100 text-blue-800 border-blue-200",
      done: "bg-green-100 text-green-800 border-green-200",
    };

    const statusLabels = {
      to_do: "To Do",
      in_progress: "In Progress",
      done: "Done",
    };

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
          statusStyles[status as keyof typeof statusStyles] ||
          statusStyles.to_do
        }`}
      >
        {statusLabels[status as keyof typeof statusLabels] || status}
      </span>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const priorityStyles = {
      low: "bg-green-100 text-green-800 border-green-200",
      medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
      high: "bg-red-100 text-red-800 border-red-200",
    };

    const priorityIcons = {
      low: "🟢",
      medium: "🟡",
      high: "🔴",
    };

    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${
          priorityStyles[priority as keyof typeof priorityStyles] ||
          priorityStyles.low
        }`}
      >
        <span>{priorityIcons[priority as keyof typeof priorityIcons]}</span>
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    );
  };

  const displayTasks = filteredTasks ?? tasks;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        

        <Filter
          onFilter={(filters) => {
            const filtered = tasks.filter((task) => {
              const matchPriority = filters.priority
                ? task.priority === filters.priority
                : true;
              const matchStatus = filters.status
                ? task.status === filters.status
                : true;
              return matchPriority && matchStatus;
            });
            setFilteredTasks(filtered);
          }}
          onClear={() => setFilteredTasks(null)}
        />

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Task
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Start Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Completed
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assignee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {displayTasks.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <svg
                          className="h-12 w-12 text-gray-400 mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                        <p className="text-gray-500 text-lg font-medium">
                          Không có task nào phù hợp
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  displayTasks.map((task, index) => (
                    <tr
                      key={task.id}
                      className={`hover:bg-gray-50 transition-colors duration-150 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {task.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(task.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getPriorityBadge(task.priority)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {formatDate(task.start_date) || "—"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {formatDate(task.due_date) || "—"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {formatDate(task.completed_date) || "—"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-600">
                          {task.assignee_id || "Unassigned"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEdit(task.id!)}
                            className="inline-flex items-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          >
                           
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(task.id!)}
                            className="inline-flex items-center px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                          >
                          
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksManaPage;
