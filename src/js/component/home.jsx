import React, { useEffect } from "react";
import ToDoList from "./ToDoList";
import "../../styles/index.css";

function Home() {
  /**
   *TODO  CREATE THE TO DO USER 
   
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

  return (
    <div className="App">
      <h1>SIDE QUESTS</h1>
      <div className="tasks-main-list">
        <ToDoList />
      </div>
    </div>
  );
}

export default Home;
