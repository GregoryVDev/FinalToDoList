export const Button = ({ added, style, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      {added}
    </button>
  );
};
