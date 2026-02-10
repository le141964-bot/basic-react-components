"use client"; 

// a conditional rendering based on the state passed via props 

export default function TaskList({ tasks }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add one</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}