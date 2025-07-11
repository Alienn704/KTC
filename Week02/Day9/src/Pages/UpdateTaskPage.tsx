"use client"

import { useForm } from "react-hook-form"
import { useEffect, useState } from "react" // Added useState for loading
import { getTaskById, updateTask } from "../service"
import type { Task } from "../types"
import { useNavigate, useParams } from "react-router"

const UpdateTaskPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting }, // Added isSubmitting
  } = useForm<Task>()
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true) // Loading state for fetching task

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        setLoading(false)
        return
      }
      setLoading(true)
      try {
        const task = await getTaskById(Number(id))
        setValue("title", task.title)
        setValue("description", task.description)
        setValue("start_date", task.start_date?.slice(0, 10))
        setValue("due_date", task.due_date?.slice(0, 10))
        setValue("completed_date", task.completed_date?.slice(0, 10))
        setValue("status", task.status)
        setValue("priority", task.priority)
        setValue("assignee_id", task.assignee_id)
      } catch (error) {
        console.error("Error fetching task:", error)
        alert("Không tìm thấy task hoặc có lỗi khi tải.")
        navigate("/tasks") // Redirect if task not found or error
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id, setValue, navigate])

  const onSubmit = async (data: Task) => {
    try {
      await updateTask(Number(id), {
        ...data,
        start_date: new Date(data.start_date),
        due_date: data.due_date ? new Date(data.due_date) : undefined,
        completed_date: data.completed_date ? new Date(data.completed_date) : undefined,
        assignee_id: data.assignee_id ? Number(data.assignee_id) : undefined, // Handle optional assignee_id
        updated_time: new Date(),
      })
      alert("Cập nhật task thành công!") // User feedback
      navigate("/tasks")
    } catch (err) {
      alert("Cập nhật task thất bại")
      console.error(err)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg border border-gray-200 p-6 md:p-8 animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/2 mb-6"></div>
          <div className="space-y-5">
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg border border-gray-200 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <h2 className="text-3xl font-bold text-gray-900">Update Task</h2>
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

          {/* Completed Date */}
          <div>
            <label htmlFor="completed_date" className="block text-sm font-medium text-gray-700 mb-1">
              Completed Date (Optional)
            </label>
            <input
              type="date"
              id="completed_date"
              {...register("completed_date")}
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
          <div>
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
          <div className="sm:col-span-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate("/tasks")}
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 text-lg font-semibold rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateTaskPage
