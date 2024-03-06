import React, { useEffect, useState } from "react";
import ToDoList from "./ToDoList";
import "../../styles/index.css";

function Home() {
  const [account, setAccount] = useState(false);

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
  }, [account]);

  return (
    <div className="App">
      <h1>SIDE QUESTS</h1>
      <div className="tasks-main-list">
        <ToDoList setAccount={setAccount} />
      </div>
    </div>
  );
}

export default Home;
