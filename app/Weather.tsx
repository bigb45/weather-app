import React, { useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Weather(props: any) {
  return (
    <div className="flex flex-col gap-y-10 p-10 rounded-xl backdrop-blur-md shadow-lg drop-shadow-xl transition duration-75">
      <h1 className="text-6xl text-white drop-shadow-2xl shadow-black">
        {props.weather.current ? (
          `${Math.round(props.weather?.current?.temp_c)}°C, `
        ) : (
          <Skeleton count={1} />
        )}
        {props.weather?.current?.condition?.text}
      </h1>

      <h2 className="text-3xl text-white drop-shadow-2xl shadow-black">
        {props.weather.current ? (
          `${props.weather?.location?.region}, ${props.weather?.location?.country}`
        ) : (
          <Skeleton count={1} />
        )}
      </h2>
    </div>
  );
}

export default Weather;
