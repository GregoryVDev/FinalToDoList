import { Button } from "./Button";
import { useState } from "react";

export const AddTask = ({ setTasks }) => {
  const [newTask, setNewTask] = useState(""); // Variable NewTasks and setNewTask to update with an empty useState

  console.log(newTask);

  const handlerClickAdd = () => {
    if (newTask !== "") {
      // Check that NewTask is not empty
      setTasks((prevTasks) => [...prevTasks, newTask]); // Update the prevTasks list with a new task in the table
      setNewTask(""); // Resets 'newTask' to empty the input for the next task
      // console.log("A task has been added");
    } else {
      alert("Please you must fill in the field");
    }
  };

  // When you press "enter", it calls handlerClickAdd
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handlerClickAdd();
      // console.log("test");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handlerClickAdd} text="Add Task" />
    </div>
  );
};
