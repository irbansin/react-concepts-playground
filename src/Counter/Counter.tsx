import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3> COUNTER Example</h3>
      <div>Count: {count}</div>
      <div className="card">
        <button onClick={() => setCount(count - 1)}> Decrease Count</button>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </div>
    </>
  );
}

export default Counter;
