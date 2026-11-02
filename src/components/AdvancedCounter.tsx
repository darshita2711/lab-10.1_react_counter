import { useState } from "react";

function AdvancedCounter() {

  // Current counter value
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Advanced Counter</h1>

      <h2>Current Count: {count}</h2>

    </div>
  );
}

export default AdvancedCounter;