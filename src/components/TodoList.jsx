import { useState, useRef, useEffect } from "react";
import { Button } from "../components/Button";
import { AddTask } from "../components/AddTask";

export const Title = ({ titre }) => {
  return (
    <div className="title-container">
      <h1>{titre}</h1>
    </div>
  );
};

export const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  const editTasks = (updateTask, index) => {
    setEditTask(updateTask);
    setEditIndex(index);
  };

  const handleClickEdit = () => {
    if (editTask !== "") {
      // creates a copy of the tasks array and assigns it to newTasks
      const newTasks = [...tasks];
      // Updates the element at index "editIndex" in "newTasks" to be equal to "editTask".
      newTasks[editIndex] = editTask;
      setTasks(newTasks);
      setEditTask(""); // The useState is emptied once it has been used
      setEditIndex(null); // null because nothing has been selected for modification
    } else {
      alert("Task cannot be empty!");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClickEdit();
    }
  };

  // Create deleteTaks with the "index" parameter
  const deleteTask = (index) => {
    // Recreates an array with all the elements that match the condition and only elements with an "i" other than index will be included in this newTasks array
    const newTasks = tasks.filter((task, i) => i !== index);
    // Update the new table in "setTasks"
    setTasks(newTasks);
  };

  return (
    <div className="todo-list-container">
      <Title titre="To Do List" />
      <AddTask setTasks={setTasks} />
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {editIndex === index ? (
              <div className="edit-task-container">
                <input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <Button
                  onClick={handleClickEdit}
                  text="Save"
                  style={{ backgroundColor: "orange", color: "white" }}
                />
              </div>
            ) : (
              <div className="task-item-content">
                {task}
                <Button
                  onClick={() => editTasks(task, index)}
                  text="Edit"
                  style={{ backgroundColor: "green", color: "white" }}
                />
                <Button
                  onClick={() => deleteTask(index)}
                  text="Delete"
                  style={{ backgroundColor: "red", color: "white" }}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
