import React, { useEffect, useState } from "react";
import ToDosInput from "./ToDosInput";
import ToDo from "./ToDo";
import "../../styles/ToDoList.css";

const ToDosList = () => {
  const [tasks, setTasks] = useState([]);

  /**
   *TODO  UPDATE THE TO DO LIST EVERY TIME THE  TASK CHANGES
   */

  useEffect(() => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/toDoJose", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tasks),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }
        return resp.json();
      })
      .then((data) => {
        setTasks(data.map((task) => task.label));
      })
      .catch((error) => console.error("Error updating tasks:", error));
  }, [tasks]);

  /**
   *TODO  LOAD THE TO DO LIST TASK
   */

  // need to load the to do list of the user
  useEffect(() => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/toDoJose")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  /**
   *TODO  ADD TASK
   */

  const addTask = (task) => {
    task.label = task.label.trim();
    const updatedTasks = [task, ...tasks];
    setTasks(updatedTasks);
  };

  /**
   *TODO  DELETE TASK
   */
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  /**
   *TODO  COMPLETE TASK
   */

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
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
            label={task.label}
            done={task.done}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
};

export default ToDosList;
