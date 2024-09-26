import { memo, useContext } from "react";
import { ShowComponentContext } from "../context/WrapperContext";

const ChildOne = memo(() => {
  console.log("Child One render");
  const { showComponent } = useContext(ShowComponentContext);

  if (!showComponent) return null;

  return <h2>Child One component</h2>;
});

export default ChildOne;
