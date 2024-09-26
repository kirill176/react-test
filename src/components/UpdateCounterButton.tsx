import { useCounterHook } from "../hooks";

const UpdateCounterButton = () => {
  console.log(`UpdateCounterButton render`);

  const { setCounterHandler } = useCounterHook();

  return <button onClick={setCounterHandler}>Update Counter</button>;
};

export default UpdateCounterButton;
