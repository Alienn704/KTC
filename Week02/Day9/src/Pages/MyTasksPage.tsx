"use client"
import { useEffect, useState, useContext } from "react"
import { getTasksByAssignee, deleteTask } from "../service"
import type { Task } from "../types"
import AuthContext from "../context"
import { useNavigate } from "react-router" 

const MyTasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const { user } = useContext(AuthContext)
  const navigate = useNavigate() 

  const formatDate = (date?: Date) => {
    return date ? new Date(date).toLocaleDateString() : ""
  }

  const fetchMyTasks = async () => {
    if (!user) return
    const data = await getTasksByAssignee(user.id)
    setTasks(data)
  }

  useEffect(() => {
    fetchMyTasks()
  }, [user]) 
  const handleEdit = (id: string | number) => {
    navigate(`/tasks/${id}/update`)
  }

  const handleDelete = async (id: string | number) => {
    if (!confirm("Bạn có chắc muốn xoá task này không?")) return
    await deleteTask(id)
    fetchMyTasks()
  }

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      to_do: "bg-gray-100 text-gray-800 border-gray-200",
      in_progress: "bg-blue-100 text-blue-800 border-blue-200",
      done: "bg-green-100 text-green-800 border-green-200",
    }
    const statusLabels = {
      to_do: "To Do",
      in_progress: "In Progress",
      done: "Done",
    }
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
          statusStyles[status as keyof typeof statusStyles] || statusStyles.to_do
        }`}
      >
        {statusLabels[status as keyof typeof statusLabels] || status}
      </span>
    )
  }

  const getPriorityBadge = (priority: string) => {
    const priorityStyles = {
      low: "bg-green-100 text-green-800 border-green-200",
      medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
      high: "bg-red-100 text-red-800 border-red-200",
    }
    const priorityIcons = {
      low: "🟢",
      medium: "🟡",
      high: "🔴",
    }
    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${
          priorityStyles[priority as keyof typeof priorityStyles] || priorityStyles.low
        }`}
      >
        <span>{priorityIcons[priority as keyof typeof priorityIcons]}</span>
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">My Assigned Tasks</h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
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
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tasks.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
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
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <p className="text-gray-500 text-lg font-medium">No tasks assigned to you</p>
                        <p className="text-gray-400 text-sm mt-1">Tasks assigned to you will appear here</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  tasks.map((task, index) => (
                    <tr
                      key={task.id}
                      className={`hover:bg-gray-50 transition-colors duration-150 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{task.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(task.status)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{getPriorityBadge(task.priority)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {formatDate(task.start_date) || "—"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {formatDate(task.due_date) || "—"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEdit(task.id!)}
                            className="inline-flex items-center px-3 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
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
  )
}

export default MyTasksPage
