import styles from "./WeatherCard.module.css";
import type { WeatherData } from "../../../types/weather";

const WeatherCard = ({ data }: { data: WeatherData }) => {
  const { temp_c, condition, humidity, wind_kph } = data.current;

  return (
    <div className={styles.card}>
      <div className={styles.main}>
        <h1>{temp_c}°</h1>
        <p>{condition.text}</p>
        <img src={condition.icon} alt="icon" />
      </div>
      <div className={styles.details}>
        <div>
          <p>Humidity</p>
          <h3>{humidity}%</h3>
        </div>
        <div>
          <p>Wind</p>
          <h3>{wind_kph} km/h</h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
