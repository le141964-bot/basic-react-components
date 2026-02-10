"use client";

// Showcasing useState, event handling and conditional rendering 

import { useState } from "react"; 

export default function ThemeFunction() {
    
    // State to track whether dark mode is on 
    const [darkMode, setDarkMode] = useState(false); 

    return ( 
        <div className={darkMode ? "dark" : "light"}> 

        <button onClick={() => setDarkMode(!darkMode)}>
            Toggle Theme 
        </button>

      {darkMode ? (
        <p>Dark mode is enabled 🌙</p>
      ) : (
        <p>Light mode is enabled ☀️</p>
      )}
    </div>
  );
}