import React, { useState } from "react";
import styles from "./ButtonTab.module.css";
interface Ibutton {
  id: number;
  name: string;
  label: string;
}

type Props = {
  buttons: Ibutton[];
};

const ButtonTabs = ({ buttons }: Props) => {
  const [activeId, setActiveId] = useState(buttons[0].id);

  const currentContent = buttons.find((btn) => btn.id === activeId)?.label;

  return (
    <div className={styles.wrapper}>

      <div className={styles.tabButtons}>
        {buttons.map((btn) => (
          <button
            className={`${styles.tabButton} ${
              btn.id === activeId ? styles.active : ""
            }`}
            onClick={() => setActiveId(btn.id)}
          >
            {btn.name.toUpperCase()}
          </button>
        ))}
      </div>

      

      <div className={styles.tabContent}
      
      >{currentContent}</div>
    </div>
  );
};

export default ButtonTabs;
