import { WrapperContext, WrapperProvider } from '../context/WrapperContext';
import UpdateCounterButton from './UpdateCounterButton';
import ToggleComponentButton from './ToggleComponentButton';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import ChildThree from './ChildThree';
import Counter from './Counter';

const Wrapper = () => {
    console.log('Wrapper render');
    return (
        <WrapperProvider>
            <WrapperContext.Consumer>
                {({showComponent, counter}) => (
                    <>
                        <UpdateCounterButton />
                        <Counter counter={counter} />
                        <ToggleComponentButton />
                        {showComponent ? <ChildOne /> : null}
                        <ChildTwo />
                        <ChildThree />
                    </>
                )}
            </WrapperContext.Consumer>
        </WrapperProvider>
    );
};

export default Wrapper;