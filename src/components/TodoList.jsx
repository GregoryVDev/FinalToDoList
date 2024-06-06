import { useState } from "react";
import { Button } from "../components/Button";
import { AddTask } from "../components/AddTask";
import { handlerClickDelete, handlerClickEdit } from "../handlers";

export const Title = ({ titre }) => {
  return (
    <div>
      <h1>{titre}</h1>
    </div>
  );
};

export const TodoList = () => {
  const [tasks, setTasks] = useState([]); // On créé une variable d'état "tasks" avec un tableau vide. setTasks permet de mettre à jour la liste de tâches

  console.log(tasks);

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index); // On filtre les tâches pour créer un tableau sans la tâche à supprimer
    setTasks(newTasks); // Met à jour l'état des tâches avec ce nouveau tableau stocké dans la const newTasks
  };

  return (
    <div>
      <Title titre="To Do List" />
      <AddTask setTasks={setTasks} />
      <Button onClick={handlerClickEdit} text="Edit" />
      <Button onClick={handlerClickDelete} text="Delete" />
    </div>
  );
};
