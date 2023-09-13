const Heading = ({ background, main }) => {
  return (

    <div className="relative flex items-center justify-center max-w-screen">
      <div className="top-0 left-[30vw] absolute opacity-60 text-[#E5E5E5] text-9xl font-bold uppercase font-urbanist md:block hidden">
        {" "}
        {background}
      </div>
      <div className="top-4 md:left-[41vw] absolute text-[#262626] text-[64px] font-bold drop-shadow-xl font-urbanist leading-[96px]">

    <div className="flex place-items-end justify-center w-full overflow-hidden">
      <div className="relative opacity-60 text-[#E5E5E5] text-6xl md:text-8xl font-bold uppercase font-urbanist">
        {background}
      </div>
      <div className="absolute uppercase text-[#262626] text-3xl md:text-6xl font-bold drop-shadow-xl font-urbanist leading-relaxed">

        {main}
      </div>
    </div>
  );
};

export default Heading;
