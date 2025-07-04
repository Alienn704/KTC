import styles from './ButtonTab.module.css'
import { useState } from 'react';

interface IButtonItem  {
  id: number;
  name: string;
  label: string;
};

interface ITabButton{
  buttons: IButtonItem[];
}


export default function Tabs({ buttons }: ITabButton) {
  const [activeId, setActiveId] = useState(buttons[0].id);

  const currentContent = buttons.find((btn) => btn.id === activeId)?.label;

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabButtons}>
        {buttons.map((btn) => (
          <button
            key={btn.id}
            className={`${styles.tabButton} ${activeId === btn.id ? styles.active : ""}`}
            onClick={() => setActiveId(btn.id)}
          >
            {btn.name.toUpperCase()}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{currentContent}</div>
    </div>
  );
}