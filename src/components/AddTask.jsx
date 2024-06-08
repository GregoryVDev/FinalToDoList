import { Button } from "./Button";
import { useState, useEffect, useRef } from "react";

export const AddTask = ({ setTasks }) => {
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handlerClickAdd = () => {
    if (newTask !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
      inputRef.current.focus();
    } else {
      alert("Please you must fill in the field");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handlerClickAdd();
    }
  };

  return (
    <div className="add-task-container">
      <input
        ref={inputRef}
        className="task-input"
        type="text"
        placeholder="Enter your task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        onClick={handlerClickAdd}
        text="Add Task"
        style={{ backgroundColor: "blue", color: "white" }}
      />
    </div>
  );
};
