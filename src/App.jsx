import "./App.css";
import { Button } from "./components/Button";

export const App = () => {
  const handleClick = () => {
    alert("Vous avez cliqué");
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        style={{ backgroundColor: "blue", color: "white" }}
        added="Add"
      />
    </div>
  );
};
