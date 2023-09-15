
const Heading = ({ background, main }) => {
  return (
    <div className="flex place-items-end justify-center w-full overflow-hidden">
      <div className="relative opacity-60 text-[#E5E5E5] text-5xl md:text-8xl font-bold uppercase font-urbanist">
        {background}
      </div>
      <div className="absolute uppercase text-[#262626] text-3xl md:text-6xl font-bold drop-shadow-xl font-urbanist leading-relaxed">
        {main}
      </div>
    </div>
  );
};

export default Heading;
