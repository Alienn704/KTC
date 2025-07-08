import styles from "./CallButton.module.css";
import { Phone } from "lucide-react";

const CallButton = () => {
  return (
    <button className={styles.button}>
      <div className={styles.left}>
        <img className={styles.img} src="images/avt3.png" alt="" />
        <span className={styles.name}>María</span>
      </div>

      <Phone fill="black" size={25}/>
    </button>
  );
};

export default CallButton;
