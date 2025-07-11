import { useEffect, useState } from "react";
import { getTasks } from "../service";
import type { Task } from "../types";
import { useNavigate } from "react-router";

const TasksManaPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const formatDate = (date?: Date) => {
    return date ? new Date(date).toLocaleDateString() : "";
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };

    fetchTasks();
  }, []);
  const navigate = useNavigate();

  const handleEdit = (id: string | number) => {
    navigate(`/tasks/${id}/update`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>
        Tasks Management
      </h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Start Date</th>
            <th>Due Date</th>
            <th>Completed Date</th>
            <th>Assignee</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.status}</td>
              <td>{task.priority}</td>
              <td>{formatDate(task.start_date)}</td>
              <td>{formatDate(task.due_date)}</td>
              <td>{formatDate(task.completed_date)}</td>
              <td>{task.assignee_id ?? "N/A"}</td>
              <td>
                <button onClick={() => handleEdit(task.id!)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TasksManaPage;
