import styles from "./DashboardButton.module.css";
import { Ellipsis } from "lucide-react";

const DashboardButton = () => {
  return (
    <button className={styles.button}>
      <div className={styles.row}>
        <div className={styles.left}>
          <div className={`${styles.badge} ${styles.highlight}`}>Highlight</div>
          <div className={`${styles.badge} ${styles.feeds}`}>Feeds</div>
        </div>
        <Ellipsis />
      </div>

      <div className={styles.column}>
        <span className={styles.title}>Dashboard</span>
        <span className={styles.subTitle}>Business management service</span>
      </div>

      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div className={styles.progressFill}></div>
        </div>
        <div className={styles.percent}>80%</div>
      </div>
    </button>
  );
};

export default DashboardButton;
