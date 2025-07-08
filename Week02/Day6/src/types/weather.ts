export interface CurrentWeather {
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
  humidity: number;
  wind_kph: number;
}

export interface ForecastHour {
  time: string;
  temp_c: number;
  condition: {
    icon: string;
  };
}

export interface WeatherData {
  location: {
    name: string;
  };
  current: CurrentWeather;
  forecast: {
    forecastday: {
      hour: ForecastHour[];
    }[];
  };
}
