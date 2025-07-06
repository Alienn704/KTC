import { useState } from 'react';

export default function DoubleClickMessage() {
  const [showMsg, setShowMsg] = useState(false);

  const handleDoubleClick = () => {
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000);
  };

  return (
    <div>
      <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
      {showMsg && <p>Double-clicked!</p>}
    </div>
  );
}
