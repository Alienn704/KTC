import { useState } from "react";

export default function HoverHighlight() {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <span
        onMouseMove={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "50px",
          height: "30px",
          backgroundColor: hovered ? "yellow" : "white",
        }}
      >
        Hover me!
      </span>
    </div>
  );
}
