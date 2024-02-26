import React from "react";
import ToDoList from "./ToDoList";
import "../../styles/index.css";

function Home() {
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
