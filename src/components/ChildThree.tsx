import SetListItemsButton from "./SetListItemsButton";
import List from "./List";
import { memo, useContext } from "react";
import { ListItemsContext } from "../context/WrapperContext";

const ChildThree = memo(() => {
  console.log("Child THREE render");
  const { listItems } = useContext(ListItemsContext);

  return (
    <>
      <h2>Child Three component</h2>
      <SetListItemsButton />
      {listItems.length == 0 ? null : <List listItems={listItems} />}
    </>
  );
});

export default ChildThree;
