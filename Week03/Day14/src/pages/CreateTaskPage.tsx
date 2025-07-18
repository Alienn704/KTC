"use client"

import { useForm } from "react-hook-form"
import { apiClient } from "../lib/api-client";
import type { Task } from "../types"
import { useNavigate } from "react-router"

const createTask = async (taskData: Omit<Task, "id">): Promise<Task> => {
  const response = await apiClient.post("/workspaces/tasks", taskData);
  return response.data;
};


const CreateTaskPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Task>()
  const navigate = useNavigate()

  const onSubmit = async (data: Task) => {
    try {
      const newTask = await createTask({
        title: data.title,
        description: data.description,
        start_date: new Date(data.start_date),
        due_date: data.due_date ? new Date(data.due_date) : undefined,
        status: data.status,
        completed_date: data.completed_date ? new Date(data.completed_date) : undefined,
        priority: data.priority,
        assignee_id: data.assignee_id ? Number(data.assignee_id) : undefined,
        created_time: new Date(),
        updated_time: new Date(),
      })
      console.log("Tạo task thành công:", newTask)
      alert("Tạo task thành công!")
      reset()
      navigate("/tasks")
    } catch (err) {
      alert("Tạo task thất bại")
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg border border-gray-200 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <h2 className="text-3xl font-bold text-gray-900">Create New Task</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter task title"
              {...register("title", { required: "Vui lòng nhập tiêu đề" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description (Optional)
            </label>
            <textarea
              id="description"
              placeholder="Add a detailed description for the task"
              rows={4}
              {...register("description")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-y"
            />
          </div>

          {/* Start Date */}
          <div>
            <label htmlFor="start_date" className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              id="start_date"
              {...register("start_date", { required: "Chọn ngày bắt đầu" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
            {errors.start_date && <p className="mt-1 text-sm text-red-600">{errors.start_date.message}</p>}
          </div>

          {/* Due Date */}
          <div>
            <label htmlFor="due_date" className="block text-sm font-medium text-gray-700 mb-1">
              Due Date (Optional)
            </label>
            <input
              type="date"
              id="due_date"
              {...register("due_date")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="status"
              {...register("status")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm"
            >
              <option value="to_do">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              id="priority"
              {...register("priority")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Assignee ID */}
          <div className="sm:col-span-2">
            <label htmlFor="assignee_id" className="block text-sm font-medium text-gray-700 mb-1">
              Assignee ID (Optional)
            </label>
            <input
              type="number"
              id="assignee_id"
              placeholder="Enter assignee ID"
              {...register("assignee_id")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              )}
              {isSubmitting ? "Creating Task..." : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTaskPage
