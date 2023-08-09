import { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" autoFocus />
      <button onClick={handleClick}>Hacer Foco</button>
    </div>
  );
};

export default InputFocus;
