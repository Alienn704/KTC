// import "./App.css";
import styles from "./App.module.css";
import type { WeatherData } from "./types/weather";
import Create from "./components/ListCustomers/Create";
import CustomerTable from "./components/ListCustomers/ListCustomers";
import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherApp/WeatherCard";
import SearchBar from "./components/WeatherApp/SearchBar";
import ForecastList from "./components/WeatherApp/ForecastList";

const API_KEY = "c9a0ca46550648b29ce125849232709";

function App() {
  const [reloadTrigger, setReloadTrigger] = useState(false);

  const handleCreated = () => {
    setReloadTrigger((prev) => !prev);
  };

  const [city, setCity] = useState("Hanoi");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no&lang=vi`
        );
        if (!res.ok) throw new Error("City not found or API error");
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setWeather(null);
        setError("Không tìm thấy thành phố");
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6 mx-auto">
        <h1 className="text-2xl font-bold text-blue-800 mb-6 mx-auto">
          Customer Management
        </h1>
        <Create onCreated={handleCreated} />
        <CustomerTable />
      </div>
      <hr />
      <div>
        <h1 className="text-2xl font-bold text-blue-800 mb-6 mx-auto">
          Weather App
        </h1>
        <div className={styles.app}>
          <SearchBar city={city} setCity={setCity} />

          {loading && <p>Đang tải dữ liệu thời tiết...</p>}

          {error && <p className="text-red-500">{error}</p>}

          {!loading && !error && weather && (
            <>
              <WeatherCard data={weather} />
              <ForecastList
                hours={weather.forecast.forecastday[0].hour.slice(9, 13)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
