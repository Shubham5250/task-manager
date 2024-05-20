// App.js
import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import TaskList from "./components/TaskList";
import "./App.css"; // Import CSS file for App styles

const App = () => {
  const [userId, setUserId] = useState(null);

  const handleLogin = (userId) => {
    setUserId(userId);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      {userId ? (
        <TaskList userId={userId} />
      ) : (
        <>
          <Login onLogin={handleLogin} />
          <Register />
        </>
      )}
    </div>
  );
};

export default App;
