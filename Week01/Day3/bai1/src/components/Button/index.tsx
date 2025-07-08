import styles from './Button.module.css'
type TButtonProps ={
    label: string;
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}
function Button({label, leftIcon, rightIcon}: TButtonProps) {
  return (
    <div className={styles.button}>{leftIcon}{label}{rightIcon}</div>
  )
}

export default Button