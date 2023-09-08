import React from "react";

const Heading = ( { background, main } ) => {
  return (
    <div className="relative flex items-center justify-center max-w-screen">
      <div className="top-0 left-[30vw] absolute opacity-60 text-[#E5E5E5] text-9xl font-bold uppercase font-urbanist">
        {" "}
        {background}
      </div>
      <div className="top-4 left-[41vw] absolute text-[#262626] text-[64px] font-bold drop-shadow-xl font-urbanist leading-[96px]">
        {main}
      </div>
    </div>
  );
};

export default Heading;
