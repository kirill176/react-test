import { useToggleComponentHook } from "../hooks";

const ToggleComponentButton = () => {
    console.log(`ToggleComponentButton render`);

    const { setShowComponentHandler } = useToggleComponentHook()

    return <button onClick={setShowComponentHandler}>Toggle Component</button>
};

export default ToggleComponentButton;