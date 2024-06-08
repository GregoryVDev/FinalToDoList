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
  const editInputRef = useRef(null);

  useEffect(() => {
    if (editIndex !== null) {
      editInputRef.current.focus();
    }
  }, [editIndex]);

  const editTasks = (updateTask, index) => {
    setEditTask(updateTask);
    setEditIndex(index);
  };

  const handleClickEdit = () => {
    if (editTask !== "") {
      const newTasks = [...tasks];
      newTasks[editIndex] = editTask;
      setTasks(newTasks);
      setEditTask("");
      setEditIndex(null);
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
    const newTasks = tasks.filter((task, i) => i !== index);
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
                  ref={editInputRef}
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
