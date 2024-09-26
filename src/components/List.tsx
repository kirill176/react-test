import ListItem from "./ListItem";
import { ListItemType } from "../types";
import { FC, memo } from "react";

interface ListProps {
  listItems: ListItemType[];
}

const List: FC<ListProps> = memo(({ listItems }) => {
  console.log("List render");

  return (
    <div>
      {listItems.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </div>
  );
});

export default List;
