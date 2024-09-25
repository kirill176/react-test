import { createContext, useState } from "react";
import { ListItemType } from "../types";

type WrapperContextType = {
    counter: number;
    showComponent: boolean;
    listItems: ListItemType[];
    setCounterHandler: () => void;
    setShowComponentHandler: () => void;
    setListItemsHandler: (items: ListItemType[]) => void;
}

export const WrapperContext = createContext<WrapperContextType>({
    counter: 0,
    showComponent: false,
    listItems: [],
    setCounterHandler: () => {},
    setShowComponentHandler: () => {},
    setListItemsHandler: () => {},
});

type Props = {
    children: JSX.Element | JSX.Element[];
};

export const WrapperProvider = ({ children }: Props) => {
    const [counter, setCounter] = useState(0);
    const [showComponent, setShowComponent] = useState(false);
    const [listItems, setListItems] = useState<ListItemType[]>([]);

    const setCounterHandler = () => {
        setCounter(counter + 1);
    }

    const setShowComponentHandler = () => {
        setShowComponent(!showComponent)
    };

    const setListItemsHandler = (items: ListItemType[]) => {
        setListItems(items);
    };

    const value = {
        counter,
        showComponent,
        listItems,
        setCounterHandler,
        setShowComponentHandler,
        setListItemsHandler
    }

    return (
        <WrapperContext.Provider value={value}>
            {children}
        </WrapperContext.Provider>
    )
}