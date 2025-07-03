import styles from "./Button.module.css";

type TButtonProps = {
  leftIcon?: React.ReactNode;
  placeholderText?: string;
  text?: string;
  rightIcon?: React.ReactNode;
};

const Button = ({
  leftIcon,
  placeholderText,
  text,
  rightIcon,
}: TButtonProps) => {
  return (
    <button className={styles.button}>
      {leftIcon}
      {placeholderText && (
        <span className={styles.placeholder}>{placeholderText}</span>
      )}
      {text}
      {rightIcon && (
        <span className={styles.rightIconWrapper}>{rightIcon}</span>
      )}
    </button>
  );
};

export default Button;
