import { WrapperProvider } from "../context/WrapperContext";
import UpdateCounterButton from "./UpdateCounterButton";
import ToggleComponentButton from "./ToggleComponentButton";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import ChildThree from "./ChildThree";
import Counter from "./Counter";

const Wrapper = () => {
  console.log("Wrapper render");
  return (
    <WrapperProvider>
      <UpdateCounterButton />
      <Counter />
      <ToggleComponentButton />
      <ChildOne />
      <ChildTwo />
      <ChildThree />
    </WrapperProvider>
  );
};

export default Wrapper;
