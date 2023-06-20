import React from "react";

const getHour = (data: any) => {
  let time = String(new Date(data?.time).getHours());
  if (time < "10") time = "0" + time;
  time += ":00";
  return time;
};
function ForecastElement(props: any) {
  let time = getHour(props.data);

  return (
    <div className="flex flex-col space-y-1 justify-center items-center p-3 hover:bg-white/10 transition duration-50  rounded-md">
      <h1 className="text-xl text-gray-300 drop-shadow-2xl shadow-black">
        {time}
      </h1>
      <img
        className="w-[100px] h-[100px]"
        src={props.data?.condition?.icon}
        alt=""
      />

      <h1 className="text-xl text-white drop-shadow-2xl shadow-black">
        {Math.round(props.data?.temp_c)}°
      </h1>
    </div>
  );
}

export default ForecastElement;

// TODO: make these elements clickable and clicking them results in the left-handside values and background changing to the respective weather status
