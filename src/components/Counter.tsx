type Props = {
    counter: number;
}

const Counter = ({ counter }: Props) => {
    console.log('Counter render');

    return <h3>Counter value: {counter}</h3>
};

export default Counter;
