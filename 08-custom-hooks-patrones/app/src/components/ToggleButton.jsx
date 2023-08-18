// import { useState } from "react";
import useToggle from "../hooks/useToggle";

const ToggleButton = () => {
  // const [isOn, setIsOn] = useState(false);

  // const handleToggle = () => {
  //   setIsOn(!isOn);
  // };
  const [isOn, setIsOn] = useToggle();

  return <button onClick={setIsOn}>{isOn ? "Encendido" : "Apagado"}</button>;
};

export default ToggleButton;
