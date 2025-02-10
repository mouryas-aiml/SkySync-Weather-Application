export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    humidity: number;
    feelslike_c: number;
    air_quality: {
      "us-epa-index": number;
    };
  };
}

export interface WeatherError {
  error: {
    code: number;
    message: string;
  };
}