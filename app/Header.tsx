import { useContext } from "react";

export const Header = (props: any) => {
  return (
    <div className="text-2xl w-full h-16 px-5 flex items-center">
      <img src={props.data.icon} alt="" />

      <h1
        className="text-white drop-shadow-2xl shadow-black align-middle cursor-pointer"
        onClick={props.data.reloadData}
      >
        WEATHER APP
      </h1>
    </div>
  );
};
