import SetListItemsButton from './SetListItemsButton';
import List from './List';

const ChildThree = () => {
    console.log('Child THREE render');

    return (
        <>
            <h2>Child Three component</h2>
            <SetListItemsButton />
            <List />
        </>
    )
};

export default ChildThree;