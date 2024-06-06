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

  const addTask = () => {
    if (newTask.trim() !== "") {
      // .trim() permet de supprimer les espaces avant ou après à l'intérieur d'un string. On vérifie si NewTask ne soit pas vide après avoir enlevé les espaces blancs
      setTasks([...tasks, newTask]); // Mise à jour de la liste en ajoutant une nouvelle task à la fin du tableau "tasks". "..." est un opérateur de décomposition
      setNewTask(""); // On réinitialise "newTask" en une chaine vide pour pouvoir vider le champ de saisie pour la prochaine task à ajouter
    }
  };

  const deleteTask = (remove) => {
    const newTasks = tasks.filter((task, i) => i !== remove);
    setTasks = newTask;
  };

  return <div></div>;
};
