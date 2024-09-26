import { memo } from "react";

const ChildTwo = memo(() => {
  console.log("Child TWO render");

  return <h2>Child Two component</h2>;
});

export default ChildTwo;
