import styles from "./ForecastList.module.css";
import type { ForecastHour } from "../../../types/weather";

const ForecastList = ({ hours }: { hours: ForecastHour[] }) => {
  return (
    <div className={styles.list}>
      {hours.map((h, idx) => (
        <div className={styles.hour} key={idx}>
          <p>{idx === 0 ? "Now" : h.time.slice(11, 16)}</p>
          <img src={h.condition.icon} alt="" />
          <h4>{Math.round(h.temp_c)}°</h4>
        </div>
      ))}
    </div>
  );
};

export default ForecastList;
