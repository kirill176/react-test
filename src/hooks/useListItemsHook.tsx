import { useContext } from "react";
import { WrapperContext } from "../context/WrapperContext";

export const useListItemsHook = () => {
    const { listItems, setListItemsHandler } = useContext(WrapperContext);

    return { listItems, setListItemsHandler };
};