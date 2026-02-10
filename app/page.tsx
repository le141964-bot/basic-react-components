"use client";

import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function TasksPage() {

  // The <string[]> tells TypeScript that tasks will be an array of strings
  const [tasks, setTasks] = useState<string[]>([]);

  // Function to add a new task
  const addTask = (taskText: string) => {
    // Spread operator keeps existing tasks and adds the new one
    setTasks([...tasks, taskText]);
  };

  return (
    <div>
      <h1>Task Manager</h1>

      {/* Passing addTask function as a prop */}
      <TaskForm addTask={addTask} />

      {/* Passing tasks array as a prop */}
      <TaskList tasks={tasks} />
    </div>
  );
}

