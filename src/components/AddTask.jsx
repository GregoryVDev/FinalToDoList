import { Button } from "./Button";
import { useState } from "react";

// import { handlerClickAdd } from "../handlers";

export const AddTask = ({ setTasks }) => {
  const [newTask, setNewTask] = useState(""); // On créé une autre variable newTask avec un useState vide. SetNewTask qui mettra à jour la valeur de NewTask

  console.log(newTask);

  const handlerClickAdd = () => {
    if (newTask !== "") {
      // On vérifie si NewTask ne soit pas vide
      setTasks((prevTasks) => [...prevTasks, newTask]); // Mise à jour de la liste en ajoutant une nouvelle task à la fin du tableau "tasks". "..." est un opérateur de décomposition
      setNewTask(""); // On réinitialise "newTask" en une chaine vide pour pouvoir vider le champ de saisie pour la prochaine task à ajouter
    }
    console.log("Une task a été ajouté");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button onClick={handlerClickAdd} text="Add Task" />
    </div>
  );
};
