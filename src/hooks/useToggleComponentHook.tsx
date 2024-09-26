import { useContext } from "react";
import { ShowComponentContext } from "../context/WrapperContext";

export const useToggleComponentHook = () => {
  const { showComponent, setShowComponentHandler } =
    useContext(ShowComponentContext);

  return { showComponent, setShowComponentHandler };
};
