import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MainSubtext(props: any) {
  return (
    <div>
      <h2 className="text-3xl text-white drop-shadow-2xl shadow-black text-center w-[100px]">
        {props.title ? props.title : <Skeleton count={1} />}
      </h2>
      <h2 className="text-xl text-white drop-shadow-2xl text-center shadow-black">
        {props.title ? props.subtitle : <Skeleton count={1} />}
      </h2>
    </div>
  );
}

export default MainSubtext;
