import { useState } from "react";

function AdvancedCounter() {

    // Current counter value
    const [count, setCount] = useState<number>(0);

    // Store count history
    const [history, setHistory] = useState<number[]>([0]);

    // Custom step value
    const [step, setStep] = useState<number>(1);

    // Save message
    const [saveStatus, setSaveStatus] = useState<string>("Changes saved.");

    // Increase count
    function increment() {
        const newCount = count + step;
        setCount(newCount);
        setHistory((previousHistory) => [
            ...previousHistory,
            newCount
        ]);
    }

        // Decrease count
        function decrement() {
            const newCount = count - step;
            setCount(newCount);

            setHistory((previousHistory) => [
                ...previousHistory,
                newCount
            ]);
        }

        return (
            <div>
                <h1>Advanced Counter</h1>

                <h2>Current Count: {count}</h2>

                <button onClick={decrement}>Decrement</button>

                <button onClick={increment}>Increment</button>
                <h3>Count History:</h3>
                <ul>
                {history.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
                </ul>

            </div>
        );
    }

    export default AdvancedCounter;