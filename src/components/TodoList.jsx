import { useState } from "react";

export const TodoList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      completed: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      completed: false,
    },
  ]);
  const [text, setText] = useState("");

  const AddTask = (text) => {
    const newTask = {
      id: 1,
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const DeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {};
};
