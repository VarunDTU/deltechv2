"use client"
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { fadeIn } from "@/app/lib/motion";
import { motion } from "framer-motion";
import Image from 'next/image';

const MembersCard = ({ member, index }) => {
  const handleClick = () => {
    const url = "https://www.linkedin.com/in/rahul-sharma-a21916226/";
    // onClick={()=> window.open(source_code_link,"_blank")
    window.open(url, "_blank");
    // console.log(index);
  };

  return (
    <motion.div
      variants={fadeIn("up", "tween", index * 0.4, 0.55)}
      initial="hidden"
      animate="show"
    >
      <div
        className="flex flex-col bg-white w-[200px] rounded-tr-[48px] border border-[#C5C5C5] shadow-md 
       hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] transform transition-all hover:-translate-y-1 duration-150"
      >
        <Image
          src={member?.image}
          alt="Member-img"
          width={150}
          height={50}
          className="m-6 object-contain rounded-full"
        />
        <div className="flex flex-col mb-5">
          <p className="text-[#000000] font-bold text-center">{member?.name}</p>
          <p className="text-[#7B7474] text-center">{member?.position}</p>
        </div>
        <button
          onClick={handleClick}
          className="py-3 px-7 mx-auto w-fit duration-500 text-[#1341EC] border-2 border-[#1341EC] rounded-xl mb-8
      hover:bg-gradient-to-t from-[#1341EC] to-[#142e8a] hover:text-[#fff]"
        >
          <div className="flex flex-row items-center justify-center gap-1">
            <AiFillLinkedin size={20} />
            <span> View Profile </span>
          </div>
        </button>
      </div>
    </motion.div>
  );
};

export default MembersCard;
// hover:border-[#1341EC]
