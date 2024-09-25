import {  useContext } from "react";
import { WrapperContext } from "../context/WrapperContext";

export const useToggleComponentHook = () => {
    const { showComponent, setShowComponentHandler } = useContext(WrapperContext);

    return { showComponent, setShowComponentHandler };
}