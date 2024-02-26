import React, { useState } from "react";
import ToDosInput from "./ToDosInput";
import ToDo from "./ToDo";
import "../../styles/ToDoList.css";

const ToDosList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    task.text = task.text.trim();
    const updatedTasks = [task, ...tasks];
    setTasks(updatedTasks);
  };
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <ToDosInput addTask={addTask} />
      <div className="todos-container">
        {tasks.map((task) => (
          <ToDo
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
};

export default ToDosList;
