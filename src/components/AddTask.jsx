import { Button } from "./Button";
import { handlerClickAdd } from "../handlers";

export const AddTask = ({ newTask, setNewTask, addTask }) => {
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div>
      <Button onClick={handlerClickAdd} text="Add Task" />
      <input
        type="text"
        placeholder="Enter your task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
    </div>
  );
};
