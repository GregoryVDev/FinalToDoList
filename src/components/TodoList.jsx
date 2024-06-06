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
  const [newTask, setNewTask] = useState(""); // On créé une autre variable newTask avec un useState vide. SetNewTask qui mettra à jour la valeur de NewTask

  const addTask = () => {
    if (newTask !== "") {
      // On vérifie si NewTask ne soit pas vide
      setTasks([...tasks, newTask]); // Mise à jour de la liste en ajoutant une nouvelle task à la fin du tableau "tasks". "..." est un opérateur de décomposition
      setNewTask(""); // On réinitialise "newTask" en une chaine vide pour pouvoir vider le champ de saisie pour la prochaine task à ajouter
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index); // On filtre les tâches pour créer un tableau sans la tâche à supprimer
    setTasks(newTasks); // Met à jour l'état des tâches avec ce nouveau tableau stocké dans la const newTasks
  };

  return (
    <div>
      <AddTask newTask={newTask} setNewTask={setNewTask} />
      <Button onClick={handlerClickEdit} text="Edit" />
      <Button onClick={handlerClickDelete} text="Delete" />
    </div>
  );
};
