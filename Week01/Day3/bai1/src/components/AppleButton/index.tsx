import { Apple } from "lucide-react";
import styles from "./AppleButton.module.css";

const AppleButton = () => {
  return (
    <button className={styles.button}>
      <Apple size={20} />
      <span>Continue with Apple</span>
    </button>
  );
};

export default AppleButton;