import { useState } from "react";

export const Title = ({ titre }) => {
  return (
    <div>
      <h1>{titre}</h1>
    </div>
  );
};

export const TodoList = () => {
  const [tasks, setTasks] = useState([]); // On créé une variable d'état "tasks" avec un tableau vide. setTasks permet de mettre à jour la liste de tâches
  const [newTask, setNewTask] = useState(""); // On créé une autre variable newTask avec un useState vide. SetNewTask qui mettra à jour la valeur de NewTask

