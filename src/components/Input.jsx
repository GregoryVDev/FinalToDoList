export const Input = (InputText) => {
  const [text, setText] = useState("");
  return (
    <input
      placeholder={InputText.placeholder}
      name={InputText.name}
      value={text}
      onChange={(e) => {
        setValue(e.target.value);
        InputText.onTaskChange(e.target.value);
      }}
    />
  );
};
