"use client";
import Axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import Weather from "./Weather";
import CurrentWeather from "./components/CurrentWeather";
import ForecastDetails from "./components/ForecastDetails";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import WeatherContext from "./context/weatherContext.js";
import Searchbar from "./components/Searchbar";

export default function Home() {
  const [image, setImage] = useState<any>("");
  const [weather, setWeather] = useState<any>({});
  const [hourForecast, setHourForecast] = useState<any>(null);
  const [weatherDetails, setWeatherDetails] = useState<{}>([]);
  const [userLocation, setUserLocation] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    getLocation();
  }, []);
  useEffect(() => {
    getWeather(userLocation);
  }, [userLocation]);

  const getBackgroundImage = async (query: string) => {
    const Access_Key = "nvUefDbjvYifQaZMHcLj2J16H_CDf1wCm5CnI58SGvU";
    const res = await Axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${Access_Key}`
    );
    setImage(res.data.results[Math.floor(Math.random() * 5)].urls.regular);
  };

  const getLocation = async () => {
    try {
      const ip = await Axios.get("https://ipapi.co/ip/");
      const locationRes = await Axios.get(`https://ipapi.co/${ip.data}/json/`);
      setUserLocation(locationRes.data.city);
    } catch (e) {
      console.log(e);
    }
  };

  const getWeather = async (userLocation: any) => {
    // get the weather in the specified location
    try {
      const res = await Axios.get(
        `https://api.weatherapi.com/v1/current.json?key=83a95104b1bd415d96c135127231706&q=${userLocation}&aqi=no`
      );
      const query = res.data.current.condition.text + " weather";
      setWeather(res.data);
      setWeatherDetails({
        temp: res.data.current.feelslike_c,
        wind_speed: res.data.current.wind_kph,
        uv: res.data.current.uv,
      });

      const forecastRes = await Axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=83a95104b1bd415d96c135127231706&q=${userLocation}&aqi=no`
      );
      setHourForecast(forecastRes.data.forecast.forecastday[0].hour);

      // get an image from unsplash depending on the weather status
      getBackgroundImage(query);
      setError(false);
    } catch (e) {
      setError(true);
    }
  };

  const icon = weather?.current?.condition?.icon;
  return (
    <WeatherContext.Provider
      value={{ weatherDetails, setWeatherDetails, setUserLocation }}
    >
      <SkeletonTheme baseColor="#6667" highlightColor="#5556">
        <main
          style={{
            backgroundImage: `url(${image})`,
          }}
          className="bg-cover bg-center flex min-h-screen flex-col p-4 bg-slate-700"
        >
          <div className="ml-[100px]">
            <Header data={{ icon: icon, reloadData: getWeather }} />
          </div>
          <div className="flex flex-col justify-center items-center pt-20">
            <Searchbar />
            <div className="pt-10 text-5xl font-bold text-red-500">
              {error && <h1>Data Unavailable.</h1>}
            </div>
          </div>

          <div className="flex flex-row flex-wrap lg:m-[100px] justify-around">
            <div className="flex flex-col w- space-y-16 ">
              <Weather weather={weather} />
              <CurrentWeather />
            </div>
            <ForecastDetails data={hourForecast} />
          </div>
        </main>
      </SkeletonTheme>
    </WeatherContext.Provider>
  );
}

// TODO: add light-gray search bar with 100% rounded edges to search a certain city and get the weather in that area
