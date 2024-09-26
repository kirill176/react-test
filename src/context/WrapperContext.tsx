import { createContext, useCallback, useMemo, useState } from "react";
import { ListItemType } from "../types";

export const CounterContext = createContext({
  counter: 0,
  setCounterHandler: () => {},
});

export const ShowComponentContext = createContext({
  showComponent: false,
  setShowComponentHandler: () => {},
});

export const ListItemsContext = createContext({
  listItems: [] as ListItemType[],
  setListItemsHandler: (items: ListItemType[]) => {},
});

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const WrapperProvider = ({ children }: Props) => {
  const [counter, setCounter] = useState(0);
  const [showComponent, setShowComponent] = useState(false);
  const [listItems, setListItems] = useState<ListItemType[]>([]);

  const setCounterHandler = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  const setShowComponentHandler = useCallback(() => {
    setShowComponent((prevShowComponent) => !prevShowComponent);
  }, []);

  const setListItemsHandler = useCallback((items: ListItemType[]) => {
    setListItems(items);
  }, []);

  const counterValue = useMemo(
    () => ({ counter, setCounterHandler }),
    [counter, setCounterHandler]
  );
  const showComponentValue = useMemo(
    () => ({ showComponent, setShowComponentHandler }),
    [showComponent, setShowComponentHandler]
  );
  const listItemsValue = useMemo(
    () => ({ listItems, setListItemsHandler }),
    [listItems, setListItemsHandler]
  );

  return (
    <CounterContext.Provider value={counterValue}>
      <ShowComponentContext.Provider value={showComponentValue}>
        <ListItemsContext.Provider value={listItemsValue}>
          {children}
        </ListItemsContext.Provider>
      </ShowComponentContext.Provider>
    </CounterContext.Provider>
  );
};
