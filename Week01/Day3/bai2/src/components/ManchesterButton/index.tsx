import styles from "./manchester.module.css";
import { Ellipsis } from "lucide-react";

const ManchesterButton = () => {
  return (
    <button className={styles.button}>
      <div className={styles.left}>
        <img height={20} width={20} src="images/manchester.png" alt="" />
        <span>Manchester United</span>
      </div>

      <Ellipsis size={16} />
    </button>
  );
};

export default ManchesterButton;
