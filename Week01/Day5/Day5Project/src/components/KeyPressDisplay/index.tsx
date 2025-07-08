import { useState } from 'react';

export default function KeyPressDisplay() {
  const [lastKey, setLastKey] = useState('');

  return (
    <div>
      <input onKeyDown={(e) => setLastKey(e.key)} />
      <p>Last key: {lastKey}</p>
    </div>
  );
}
