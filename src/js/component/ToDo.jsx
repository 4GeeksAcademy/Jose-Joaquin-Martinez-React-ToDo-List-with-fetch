import React from "react";
import "../../styles/ToDo.css";
import { MdOutlineDelete } from "react-icons/md";

const ToDo = ({ id, label, done, completeTask, deleteTask }) => {
  const handleComplete = () => completeTask(id);
  const handleDelete = () => deleteTask(id);

  return (
    <div className={done ? "toDo-container completed" : "toDo-container"}>
      <div className="toDo-text" onClick={handleComplete}>
        {label}
      </div>
      <div className="toDo-icons-container" onClick={handleDelete}>
        <MdOutlineDelete className="toDo-icon" />
      </div>
    </div>
  );
};

export default ToDo;
