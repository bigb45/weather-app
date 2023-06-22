import { CircularProgress } from "@mui/material";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { delay, motion } from "framer-motion";

const getHour = (data: any) => {
  let time = String(new Date(data?.time).getHours());
  if (time < "10") time = "0" + time;
  time += ":00";
  return time;
};
function ForecastElement(props: any) {
  let time = getHour(props.data.hour);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: props.data.delay * 0.1,
        duration: 0.3,
        ease: "easeOut",
        type: "linear",
      }}
      className="flex flex-col space-y-1 justify-center items-center p-3 hover:bg-white/10 transition duration-50  rounded-md "
    >
      <h1 className="text-xl text-gray-300 drop-shadow-2xl shadow-black">
        {time}
      </h1>
      <img
        className="w-[100px] h-[100px]"
        src={props.data?.hour?.condition?.icon}
        alt=""
      />

      <h1 className="text-xl text-white drop-shadow-2xl shadow-black">
        {Math.round(props.data?.hour?.temp_c) + "°"}
      </h1>
    </motion.div>
  );
}

export default ForecastElement;

// TODO: make these elements clickable and clicking them results in the left-handside values and background changing to the respective weather status
