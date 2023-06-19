import React, { useState } from "react";

function Weather(props: any) {
  return (
    <div className="flex flex-col gap-y-10 p-10 rounded-xl m- backdrop-blur-md shadow-lg drop-shadow-xl min-w-[400px] max-w-[500px]">
      <h1 className="text-5xl text-white drop-shadow-2xl shadow-black">
        {props.weather?.current?.condition?.text}
      </h1>
      <h2 className="text-3xl text-white          drop-shadow-2xl shadow-black">
        {props.weather?.location?.region}, {props.weather?.location?.country}
      </h2>
    </div>
  );
}

export default Weather;
