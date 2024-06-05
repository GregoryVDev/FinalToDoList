import "./App.css";
export const HelloWorld = ({ bienvenue }) => {
  return <h1>{bienvenue}</h1>;
};

export const App = () => {
  return (
    <div>
      <HelloWorld bienvenue="Test" />
    </div>
  );
};
