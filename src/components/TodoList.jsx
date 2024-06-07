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
  const [tasks, setTasks] = useState([]); // On créé une variable d'état "tasks" avec un tableau vide. setTasks permet de mettre à jour la liste de tâches

  console.log(tasks);

  const deleteTask = (remove) => {
    const newTasks = tasks.filter((task, i) => i !== remove); // On filtre les tâches pour créer un tableau sans la tâche à supprimer
    setTasks(newTasks); // Met à jour l'état des tâches avec ce nouveau tableau stocké dans la const newTasks
  };

  return (
    <div>
      <Title titre="To Do List" />
      <AddTask setTasks={setTasks} />
      <ul>
        {tasks.map((task, remove) => (
          <li key={remove}>
            {task}
            <Button onClick={() => deleteTask(remove)} text="Delete" />
          </li>
        ))}
      </ul>
    </div>
  );
};
