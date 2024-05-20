// src/components/TaskList.js
import React, { useEffect, useState } from "react";
import { fetchTasks, deleteTask } from "../services/api";
import TaskForm from "./TaskForm";
import "./TaskList.css";

const TaskList = ({ userId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const tasks = await fetchTasks(userId);
        setTasks(tasks);
      } catch (error) {
        console.error("TaskList Error:", error);
      }
    };
    loadTasks();
  }, [userId]);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Task Delete Error:", error);
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <TaskForm userId={userId} onSave={() => {}} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
