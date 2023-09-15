"use client";

import React from "react";
import MembersCard from "../components/membersCard";
import { members_one, members_two } from "@/app/lib/memberDetails";
import Heading from "../components/Heading";

const Members = () => {
  //click on View All
  const handleAll = () => {
    console.log("View All clicked!");
  };

  return (
    <div className="max-w-screen">
      <Heading background="members" main="Members" />

      <div className="pt-4 md:mt-[150px] mt-[110px] flex flex-col flex-wrap w-full gap-[60px] justify-center items-center overflow-x-hidden">
        {/* five carousel divs starting */}
        <div className="flex flex-row flex-wrap md:gap-20 gap-10 justify-center mt-10 md:mt-5">
          {members_one.map((member, index) => (
            <MembersCard
              key={`member-${index}`}
              index={index}
              member={member}
            />
          ))}
        </div>
        <div className="flex-row flex-wrap md:gap-20 gap-10 justify-center md:flex hidden">
          {members_two.map((member, index) => (
            <MembersCard
              key={`member-${index}`}
              index={index}
              member={member}
            />
          ))}
        </div>
        {/* five carousel divs ends */}
        <div>
          <button
            onClick={handleAll}
            className="w-fit px-[60px] py-[15px] rounded-xl text-[#FFF] text-[18px] font-semibold mb-10 transition-all duration-500 bg-gradient-to-t from-[#1341EC] via-[#2c67b0] to-[#142e8a] bg-size-200 bg-pos-100 hover:bg-pos-0"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Members;
// #142e8a
// #1341EC
