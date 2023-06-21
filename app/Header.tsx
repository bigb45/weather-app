import { useContext } from "react";

export const Header = (props: any) => {
  return (
    <div className="text-xl w-full h-16 px-5 flex items-center">
      <img src={props.data} alt="" />

      <h1 className="text-white drop-shadow-2xl shadow-black align-middle">
        WEATHER APP
      </h1>
    </div>
  );
};
