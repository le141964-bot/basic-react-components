"use client"; 

import { useState } from "react"; 

// TaskForm will recive addTask as a prop from the parent component 
export default function TaskForm({ addTask }) {

    // State to track the input 
    const [input, setInput] = useState(""); 

    // Handle the form submissions 
    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim() !== "") {
            addTask(input); 
            setInput(""); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
            />
            <button type="submit">Add Task</button>
        </form>
    ); 
}
