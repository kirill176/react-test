import itemsData from '../data/itemsData';
import { useListItemsHook } from "../hooks";

const SetListItemsButton = () => {
    console.log(`SetListItemsButton render`);

    const { setListItemsHandler } = useListItemsHook();

    const updateListItemsHandler = () => {
        setListItemsHandler(itemsData);
    };

    return <button onClick={updateListItemsHandler}>Show list</button>
};

export default SetListItemsButton;