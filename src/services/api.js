// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:8080/task-manager"; // Replace with your actual API URL

// Function to register a new user
export const registerUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/register.php`, {
      username,
      password,
    });
    return response.json();
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

// Function to authenticate a user

export const loginUser = async (username, password) => {
  const response = await fetch(`${API_URL}/auth.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

// Function to create a new task
export const createTask = async (userId, title, description) => {
  try {
    const timestamp = Date.now(); // Get current timestamp
    const response = await axios.post(`${API_URL}/tasks.php`, {
      userId,
      title,
      description,
      createdTimestamp: timestamp, // Include created timestamp
    });
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
  }
};

// Function to update an existing task
export const updateTask = async (taskId, title, description) => {
  try {
    const timestamp = Date.now(); // Get current timestamp
    const response = await axios.put(
      `${API_URL}/task-manager/tasks.php?id=${taskId}`,
      {
        title,
        description,
        updatedTimestamp: timestamp, // Include updated timestamp
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

// Function to fetch tasks for a specific user
export const fetchTasks = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/tasks.php?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

// Function to delete a task
export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${API_URL}/tasks.php?id=${taskId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
