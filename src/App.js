import React, { useMemo, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [otherValue, setOtherValue] = useState(0);

  
  const multipliedValue = useMemo(() => {
    console.log('Calculating...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Multiplied Value: {multipliedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherValue(otherValue + 1)}>Change Other Value</button>
    </div>
  );
}

export default MyComponent;
