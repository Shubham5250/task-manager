// src/components/TaskForm.js
import React, { useState } from "react";
import { createTask, updateTask } from "../services/api";
import "./TaskForm.css";

const TaskForm = ({ userId, task, onSave }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (task) {
        await updateTask(task.id, title, description);
      } else {
        await createTask(userId, title, description);
      }
      onSave();
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("TaskForm Error:", error);
    }
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">{task ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default TaskForm;
