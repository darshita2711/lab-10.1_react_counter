import { useState } from "react";

function AdvancedCounter() {

  // Current counter value
  const [count, setCount] = useState<number>(0);

  // Custom step value
  const [step, setStep] = useState<number>(1);


  // Increase count
function increment() {
  setCount(count + step);
}

// Decrease count
function decrement() {
  setCount(count - step);
}

  return (
    <div>
      <h1>Advanced Counter</h1>

      <h2>Current Count: {count}</h2>

      <button onClick={decrement}>Decrement</button>

        <button onClick={increment}>Increment</button>

    </div>
  );
}

export default AdvancedCounter;