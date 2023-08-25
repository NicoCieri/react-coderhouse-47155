import { useState } from "react";

const ColorSelector = () => {
  const [color, setColor] = useState("lightcoral");

  const handleChange = (event) => {
    setColor(event.target.value);

    document.body.style.backgroundColor = event.target.value;
  };

  console.log(color);

  return (
    <div>
      <select onChange={handleChange} value={color}>
        <option value="lightcoral">Rojo</option>
        <option value="lightblue">Azul</option>
        <option value="lightgreen">Verde</option>
      </select>

      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: 8,
          border: "1px solid black",
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default ColorSelector;
