import { useState } from "react";

export default function ToggleSwitch() {
  const [isOn, setOn] = useState(false);

  return (
    <div>
      <button onClick={() => setOn(!isOn)}>
        {isOn ? "TURN OFF" : "TURN ON"}
      </button>

      <p>State: {isOn ? "ON" : "OFF"}</p>
    </div>
  );
}

