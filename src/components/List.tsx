import ListItem from './ListItem';
import { useListItemsHook } from "../hooks";

const List = () => {
    console.log('List render');

    const { listItems } = useListItemsHook()

    return (
        <div>
            {listItems.map(item => <ListItem { ...item }/>)  }
        </div>
    );
};

export default List;