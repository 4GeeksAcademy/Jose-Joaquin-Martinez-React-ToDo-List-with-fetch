import React, { useEffect, useState } from "react";
import ToDosInput from "./ToDosInput";
import ToDo from "./ToDo";
import "../../styles/ToDoList.css";

const ToDosList = () => {
  const [tasks, setTasks] = useState([]);

  /**
   *TODO  UPDATE THE TO DO LIST EVERY TIME THE  TASK CHANGES
   */

  const upDateList = (upDateData) => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/toDoJose", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upDateData),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }
        return resp.json();
      })
      .catch((error) => console.error("Error updating tasks:", error));
  };

  /**
   *TODO  DELETE USER
   */

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/apis/fake/todos/user/toDoJose",
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setTasks([]);
      alert("Account deleted successfully");
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

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
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  /**
   *TODO  ADD TASK
   */

  const addTask = (task) => {
    task.label = task.label.trim();
    const updatedTasks = [task, ...tasks];
    setTasks(updatedTasks);
    upDateList(updatedTasks);
  };

  /**
   *TODO  DELETE TASK
   */
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    upDateList(updatedTasks);
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
    upDateList(updatedTasks);
  };

  return (
    <div className="list-container">
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
      <div className="button-container">
        <button className="delete-acc-btn" onClick={handleDeleteAccount}>
          Delete account
        </button>
      </div>
    </div>
  );
};

export default ToDosList;
