"use client";
import Axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Header } from "./Header";
import Weather from "./Weather";
import WeatherDetails from "./ForecastDetails";
import CurrentWeather from "./CurrentWeather";
import ForecastDetails from "./ForecastDetails";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useRouter } from "next/router";

export default function Home() {
  const [image, setImage] = useState<any>("");
  const [weather, setWeather] = useState<any>({});
  const [hourForecast, setHourForecast] = useState<any[]>([]);

  useEffect(() => {
    getWeather();
  }, []);

  const getBackgroundImage = async (query: string) => {
    const Access_Key = "nvUefDbjvYifQaZMHcLj2J16H_CDf1wCm5CnI58SGvU";
    const res = await Axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${Access_Key}`
    );
    setImage(res.data.results[Math.floor(Math.random() * 5)].urls.full);
  };

  const getWeather = async () => {
    // get the location of the user
    const locatoinRes = await Axios.get("http://ip-api.com/json//");
    const userLocation = locatoinRes.data.city;

    // get the weather in the specified location
    const res = await Axios.get(
      `http://api.weatherapi.com/v1/current.json?key=83a95104b1bd415d96c135127231706&q=${userLocation}&aqi=no`
    );
    console.log(userLocation);
    const query = res.data.current.condition.text + " weather";
    setWeather(res.data);

    const forecastRes = await Axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=83a95104b1bd415d96c135127231706&q=${userLocation}&aqi=no`
    );
    console.log(forecastRes.data);
    setHourForecast(forecastRes.data.forecast.forecastday[0].hour);
    // get an image from unsplash depending on the weather status
    getBackgroundImage(query);
  };

  const icon = weather?.current?.condition?.icon;
  return (
    <SkeletonTheme baseColor="#666" highlightColor="#444">
      <main
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="bg-cover bg-center flex min-h-screen flex-col p-4 bg-slate-700"
      >
        <div className="ml-[100px]">
          <Header data={{ icon: icon, reloadData: getWeather }} />
        </div>
        <div className="flex flex-row m-[100px] space-x-16">
          <div className=" flex flex-col w-[1000px] space-y-16 ">
            <Weather weather={weather} />
            <CurrentWeather weather={weather} />
          </div>
          <ForecastDetails data={hourForecast} />
        </div>
      </main>
    </SkeletonTheme>
  );
}

// TODO: add light-gray search bar with 100% rounded edges to search a certain city and get the weather in that area
