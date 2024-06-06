import "./App.css";
import { Title } from "./components/TodoList";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <div>
      <Title titre="To Do List" />
      <TodoList />
    </div>
  );
};
