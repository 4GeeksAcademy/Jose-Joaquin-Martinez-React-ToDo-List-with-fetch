import React, { useState } from "react";
import "../../styles/ToDosInput.css";

const ToDoInput = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSending = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTask = {
        id: Math.floor(
          Math.random() *
            99999999999999999999999999999999999999999999999999999999999999999999999999999999
        ),
        text: input,
        completed: false,
      };
      return addTask(newTask);
    }
  };

  return (
    <form className="toDo-form">
      <input
        type="text"
        className="toDo-input"
        placeholder="Here your side quest"
        name="text"
        onChange={handleChange}
        onKeyDown={handleSending}
      />
    </form>
  );
};

export default ToDoInput;
