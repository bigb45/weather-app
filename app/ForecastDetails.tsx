import React from "react";
import ForecastElement from "./ForecastElement";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ForecastDetails(props: any) {
  let currentTime = new Date().getHours();
  // if (currentTime > 15) currentTime = 15;
  const weatherHours = props.data.slice(currentTime, currentTime + 11);
  return (
    <div className="flex flex-row justify-around items-center gap-x-10 gap-y-10 p-10 rounded-xl  backdrop-blur-md transition duration-75 shadow-lg drop-shadow-xl w-[1000px] flex-wrap ml-0">
      {weatherHours.map((hour: any, key: any) => {
        return (
          <div key={key}>
            <ForecastElement data={{ hour: hour, delay: key }} />
          </div>
        );
      })}
    </div>
  );
}

export default ForecastDetails;
