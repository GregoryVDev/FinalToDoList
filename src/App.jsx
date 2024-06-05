import "./App.css";
import { Button } from "./components/Button";
import { Title } from "./components/TodoList";

export const App = () => {
  const handleClick = () => {
    alert("Vous avez cliqué");
  };

  return (
    <div>
      <Title titre="To Do List" />
      <Button
        onClick={handleClick}
        style={{ backgroundColor: "blue", color: "white" }}
        added="Add Task"
      />
    </div>
  );
};
