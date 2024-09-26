import { FC, memo } from "react";
import { useCounterHook } from "../hooks";

const Counter = memo(() => {
  console.log("Counter render");

  const { counter } = useCounterHook();

  return <h3>Counter value: {counter}</h3>;
});

export default Counter;
