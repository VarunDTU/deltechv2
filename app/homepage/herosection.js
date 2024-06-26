"use client";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div class="w-full h-screen flex items-center justify-center relative">
      <video class="object-cover h-full w-full -z-50" muted loop autoPlay>
        <source src="/munVideo.mp4#t=0.1" preload="metadata" type="video/mp4" />
      </video>

      <div className="absolute flex flex-col gap-3 w-full h-full bg-slate-900/50  items-center justify-end ">
        {/* <h1 className=" text-center font-serif  text-white md:text-9xl text-4xl font-bold uppercase pt-8 ">
          DELTECH MUN <br />
          2024
        </h1> */}
        <div className="p-2 flex flex-col md:flex-row items-center bg-slate-900/20  w-full justify-center">
          <Link
            href="https://app.deltechmun.in/"
            // className="pt-10"
          >
            <span class="relative">
              <button class="m-1 rounded-xl cursor-pointer px-8 py-4 bg-transparent border-blue-500 border-2 text-xl text-[#f1f1f1] hover:bg-[#1033e4] transition-all transform duration-100 font-merriweather font-bold tracking-widest">
                Register
                {/* Login */}
              </button>
            </span>
          </Link>
          <div className="m-2 font-mono text-lg self-center ">OR</div>
          <Link
            href="https://forms.gle/sER3DJu5nj9Z3WrPA"
            // className="pt-10"
          >
            <span class="relative">
              <button class="m-1 rounded-xl cursor-pointer px-4 py-4 bg-transparent border-blue-500 border-2 text-xl text-[#f1f1f1] hover:bg-[#1033e4] transition-all transform duration-100 font-merriweather font-bold tracking-widest">
                Register via G-Form
                {/* Login */}
              </button>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
