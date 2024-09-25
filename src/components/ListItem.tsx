import { ListItemType } from "../types";

const ListItem = ({ id, value }: ListItemType) => {
    console.log(`ListItem ${value} render`);

    return <div id={id}>{value}</div>
};

export default ListItem;