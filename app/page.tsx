"use client";
import Axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Header } from "./Header";
import Weather from "./Weather";
import WeatherDetails from "./WeatherDetails";

export default function Home() {
  const [image, setImage] = useState<any>("");
  const [weather, setWeather] = useState<any>({});

  useEffect(() => {
    getWeather();
  }, []);

  const getBackgroundImage = async (query: string) => {
    const Access_Key = "nvUefDbjvYifQaZMHcLj2J16H_CDf1wCm5CnI58SGvU";
    const res = await Axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${Access_Key}`
    ).then((res) => {
      console.log(res.data.results[0].urls.full);
      setImage(res.data.results[0].urls.full);
    });
  };

  const getWeather = async () => {
    // get the location of the user
    const locatoinRes = await Axios.get("http://ip-api.com/json//");
    const userLocation = locatoinRes.data.city;

    // get the weather in the specified location
    const weatherRes = await Axios.get(
      `http://api.weatherapi.com/v1/current.json?key=83a95104b1bd415d96c135127231706&q=${userLocation}&aqi=no`
    );
    const weatherData = weatherRes.data;
    setWeather(weatherData);

    // get an image from unsplash depending on the weather status
    const query = weatherData?.condition?.text;
    await getBackgroundImage(query);
  };

  const icon = weather?.current?.condition?.icon;
  return (
    <main
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="bg-cover bg-center flex min-h-screen flex-col items-center p-4"
    >
      <Header data={icon} />
      <div className="mt-[300px] flex flex-col w-full px-[100px]  items-center justify-center space-y-16">
        <Weather weather={weather} />
        <WeatherDetails weather={weather} />
      </div>
    </main>
  );
}
