import { useContext } from "react";
import { CounterContext } from "../context/WrapperContext";

export const useCounterHook = () => {
  const { counter, setCounterHandler } = useContext(CounterContext);

  return { counter, setCounterHandler };
};
