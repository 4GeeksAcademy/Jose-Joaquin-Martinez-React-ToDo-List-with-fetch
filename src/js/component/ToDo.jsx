import React from "react";
import "../../styles/ToDo.css";
import { MdOutlineDelete } from "react-icons/md";

const ToDo = ({ id, text, completed, completeTask, deleteTask }) => {
  return (
    <div className={completed ? "toDo-container completed" : "toDo-container"}>
      <div className="toDo-text" onClick={() => completeTask(id)}>
        {text}
      </div>
      <div className="toDo-icons-container" onClick={() => deleteTask(id)}>
        <MdOutlineDelete className="toDo-icon" />
      </div>
    </div>
  );
};

export default ToDo;
