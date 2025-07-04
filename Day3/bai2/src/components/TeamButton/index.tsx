import styles from "./TeamButton.module.css";

type TTeamButtonProps = {
  avt: string[];
  name: string;
  subtitle?: string;
  color: string;
};

const TeamButton = ({ avt, name, subtitle, color }: TTeamButtonProps) => {
  return (
    <button className={styles.button} style={{ background: color }}>
      <div className={styles.avatars}>
        {avt.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="avatar"
            className={styles.avatar}
            style={{ left: `${index * 20}px`, zIndex: index+1 }}
          />
        ))}
      </div>

      <div className={styles.column}>
        <div className={styles.name}>{name}</div>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
    </button>
  );
};

export default TeamButton;
