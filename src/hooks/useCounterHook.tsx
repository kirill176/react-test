import { useContext } from "react";
import { WrapperContext } from "../context/WrapperContext";

export const useCounterHook = () => {
    const { counter, setCounterHandler } = useContext(WrapperContext);

    return { counter, setCounterHandler };
}