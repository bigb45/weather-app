import React from "react";
import InfoText from "./MainSubtext";
import ForecastElement from "./ForecastElement";
import { Prosto_One } from "next/font/google";

function ForecastDetails(props: any) {
  let currentTime = new Date().getHours();
  console.log(currentTime);
  // if (currentTime > 15) currentTime = 15;
  const weatherHours = props.data.slice(currentTime, currentTime + 8);
  return (
    <div className="flex flex-row justify-around items-center gap-x-10 gap-y-10 p-10 rounded-xl  backdrop-blur-md hover:backdrop-blur-lg transition duration-75 shadow-lg drop-shadow-xl w-full flex-wrap">
      {weatherHours.map((hour: any) => {
        return (
          <div key={props.data[0].time}>
            <ForecastElement data={hour} />
          </div>
        );
      })}
    </div>
  );
}

export default ForecastDetails;
