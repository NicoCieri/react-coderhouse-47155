import useCounter from "../hooks/useCounter";

const Counter = ({ initial }) => {
  const { increment, count, decrement } = useCounter(initial);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
