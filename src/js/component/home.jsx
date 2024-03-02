import React from "react";
import ToDoList from "./ToDoList";
import "../../styles/index.css";

function Home() {
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
      console.log("Account deleted successfully");
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
