import React from "react";

function InfoText(props: any) {
  console.log(props);

  return (
    <div>
      <h2 className="text-3xl text-white drop-shadow-2xl shadow-black text-center">
        {props.title}
      </h2>
      <h2 className="text-xl text-white drop-shadow-2xl text-center shadow-black">
        {props.subtitle}
      </h2>
    </div>
  );
}

export default InfoText;
