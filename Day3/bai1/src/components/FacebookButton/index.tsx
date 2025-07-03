import { Facebook } from "lucide-react";
import styles from "./FacebookButton.module.css";

const FacebookButton = () => {
  return (
    <button className={styles.button}>
      <Facebook size={20} />
      <span>Continue with Facebook</span>
    </button>
  );
};

export default FacebookButton;