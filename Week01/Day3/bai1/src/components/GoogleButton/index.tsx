import { Globe } from "lucide-react";
import styles from "./GoogleButton.module.css";

const GoogleButton = () => {
  return (
    <button className={styles.button}>
      <Globe size={20} />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleButton;