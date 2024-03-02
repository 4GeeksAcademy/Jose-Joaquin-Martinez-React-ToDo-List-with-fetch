import React, { useEffect, useState } from "react";
import ToDosInput from "./ToDosInput";
import ToDo from "./ToDo";
import "../../styles/ToDoList.css";

const ToDosList = () => {
  const [tasks, setTasks] = useState([]);
  /**
   *TODO  CREATE THE TO DO USER
   */

  // not sure if this should be here and with the useEffect like that, this should create a new user everytime the element is loaded.
  useEffect(() => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/toDoJose", {
      method: "POST",
      body: [],
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  /**
   *TODO  UPDATE THE TO DO LIST EVERY TIME THE  TASK CHANGES
   */

  // Here I should use  a PUT request to update the to do list every time a new one is to be added

  useEffect(() => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/toDoJose", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tasks),
    })
      .then((resp) => resp.json())
      .then((data) => setTasks(data))
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
  }, [tasks]);

  /**
   *TODO  ADD TASK
   */

  const addTask = (task) => {
    task.label = task.label.trim();
    const updatedTasks = [task, ...tasks];
    setTasks(updatedTasks);
  };

  /* useEffect(() => {
    const addTaskFetch = async (tasks) => {
      try {
        const response = await fetch(
          "https://playground.4geeks.com/apis/fake/todos/user/toDoJose",
          {
            method: "PUT",
            body: JSON.stringify(tasks),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error adding task:", error);
      }
    };
    addTaskFetch
  }, [tasks]); */

  /** 
   *TODO  DELETE TASK
   
   */
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  /*   const deleteTask = async (id) => {
    try {
      const response = await fetch(
        `https://playground.4geeks.com/apis/fake/todos/user/toDoJose`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }; */

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
  /*  const completeTask = async (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });

    try {
      const response = await fetch(
        `https://playground.4geeks.com/apis/fake/todos/user/toDoJose`,
        {
          method: "PUT",
          body: JSON.stringify(updatedTasks),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  }; */

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
