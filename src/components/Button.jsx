export const Button = ({ text, onClick, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
};
