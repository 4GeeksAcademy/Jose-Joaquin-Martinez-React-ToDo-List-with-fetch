import React, { useEffect } from "react";
import ToDoList from "./ToDoList";
import "../../styles/index.css";

function Home() {
  /**
   *TODO  CREATE THE TO DO USER 

    // not sure if this should be here and with the useEffect like that, this should create a new user everytime the element is loaded.
   */
  useEffect(() => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/toDoJose", {
      method: "POST",
      body: JSON.stringify([]),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

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
      alert("Account deleted successfully");
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  return (
    <div className="App">
      <h1>SIDE QUESTS</h1>
      <div className="tasks-main-list">
        <ToDoList />
      </div>
      <button className="delete-acc-btn" onClick={handleDeleteAccount}>
        Delete account
      </button>
    </div>
  );
}

export default Home;
