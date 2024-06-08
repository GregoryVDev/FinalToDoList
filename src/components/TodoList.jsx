import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { AddTask } from "../components/AddTask";

export const Title = ({ titre }) => {
  return (
    <div>
      <h1>{titre}</h1>
    </div>
  );
};

export const TodoList = () => {
  const [tasks, setTasks] = useState([]); // Const tasks with useState empty and update with setTasks
  // Initiates the index of the current task
  const [editIndex, setEditIndex] = useState(null);
  // Initializes the current task value
  const [editTask, setEditTask] = useState("");

  const editTasks = (updateTask, index) => {
    setEditTask(updateTask); // Updates the task value
    setEditIndex(index); //  Updates the task index
  };

  console.log(tasks);

  const handleClickEdit = () => {
    if (editTask !== "") {
      const newTasks = [...tasks]; // Creates a copy of the task list
      newTasks[editIndex] = editTask; // Updates the task just modified in the newTasks array
      setTasks(newTasks); // Update newTasks on setTasks
      setEditTask(""); // Resets useState after editing
      setEditIndex(null); // No task in progress is modified
    } else {
      alert("Task cannot be empty!");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClickEdit();
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index); // Browse each item (task) in the ‘tasks’ list
    setTasks(newTasks);
  };

  return (
    <div>
      <Title titre="To Do List" />
      <AddTask setTasks={setTasks} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? ( // editIndex corresponds to the modified task index
              <div>
                <input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)} // if we change the text, we update the new value
                  onKeyDown={handleKeyDown}
                />
                <Button
                  onClick={handleClickEdit}
                  text="Save"
                  style={{ backgroundColor: "orange", color: "white" }}
                />
              </div>
            ) : (
              <div>
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
