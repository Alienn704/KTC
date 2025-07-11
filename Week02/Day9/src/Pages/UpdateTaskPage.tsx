import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getTaskById, updateTask } from "../service";
import type { Task } from "../types";

const UpdateTaskPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getTaskById(Number(id));
      setTask(data);
    };
    fetch();
  }, [id]);

  const handleSave = async () => {
    if (!task) return;
    await updateTask(Number(id), task);
    alert("Đã cập nhật task!");
  };

  if (!task) return <p>Loading...</p>;
  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Task</h2>
      <input
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default UpdateTaskPage;
