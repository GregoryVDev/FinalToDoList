import "./App.css";
import { Button } from "./components/Button";
import { Title } from "./components/TodoList";
import {
  handlerClickAdd,
  handlerClickDelete,
  handlerClickEdit,
} from "./handlers";

export const App = () => {
  return (
    <div>
      <Title titre="To Do List" />
      <Button onClick={handlerClickAdd} text="Add Task" />
      <Button onClick={handlerClickDelete} text="Delete" />
      <Button onClick={handlerClickEdit} text="Edit" />
    </div>
  );
};
