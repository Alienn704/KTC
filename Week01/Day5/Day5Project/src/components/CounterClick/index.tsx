import { useState } from 'react';


export default function CounterClick() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <p>Clicked: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      
    </div>
  );
}
