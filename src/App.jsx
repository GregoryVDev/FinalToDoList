import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

export const App = () => {
  const handleClick = () => {
    alert("Vous avez cliqué");
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        style={{ backgroundColor: "blue", color: "white" }}
        added="Add Task"
      />
    </div>
  );
};
