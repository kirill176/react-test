import { useContext } from "react";
import { ListItemsContext } from "../context/WrapperContext";

export const useListItemsHook = () => {
  const { listItems, setListItemsHandler } = useContext(ListItemsContext);
  return { listItems, setListItemsHandler };
};
