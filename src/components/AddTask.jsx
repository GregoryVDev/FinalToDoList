import { Button } from "./Button";
import { useState } from "react";

export const AddTask = ({ setTasks }) => {
  const [newTask, setNewTask] = useState(""); // On créé une autre variable newTask avec un useState vide. SetNewTask qui mettra à jour la valeur de NewTask

  console.log(newTask);

  const handlerClickAdd = () => {
    if (newTask !== "") {
      // On vérifie si NewTask ne soit pas vide
      setTasks((prevTasks) => [...prevTasks, newTask]); // Mise à jour de la liste en ajoutant une nouvelle task à la fin du tableau "tasks". "..." est un opérateur de décomposition
      setNewTask(""); // On réinitialise "newTask" en une chaine vide pour pouvoir vider le champ de saisie pour la prochaine task à ajouter
      console.log("A task has been added");
    } else {
      alert("Please you must fill in the field");
    }
  };

  // Permet de faire un event pour que quand on appuie sur "enter" le bouton "handlerClickAdd" soit relié à handleKeyDown
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handlerClickAdd();
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
