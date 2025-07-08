import { useState } from 'react';

export default function InputTracker() {
  const [input, setInput] = useState('');

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <p>You typed: {input || 'nothing'}</p>
    </div>
  );
}
