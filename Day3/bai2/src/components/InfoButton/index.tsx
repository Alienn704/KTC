import styles from "./InfoButton.module.css";
import { Camera } from "lucide-react";

const InfoButton = () => {
  return (
    <button className={styles.button}>

        <img height={50} width={50} src="images/avt2.png" alt="" />

      <div className={styles.column}>
        <div className={styles.name}>Wade Warren</div>
        <span className={styles.job}>Web Developer</span>
      </div>
      <div>
            <Camera size={35}/>
          </div>
    </button>
  );
};
export default InfoButton;
