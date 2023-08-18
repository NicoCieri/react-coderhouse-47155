import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  return { count, increment, decrement };
};

export default useCounter;
