"use client"

// import React from "react";
// import SectionTitle from "../components/sectionTitle";

const ImportantUpdate = () => {
  const updates = [
    {
      id: "update-1",
      content: "The distribution of email addresses to the campus ambassador delegates will commence shortly.",
    },
    {
      id: "update-1",
      content: "Registrations are now open.",
    },
    // {
    //   id: "update-1",
    //   content: "If you’re unable to attend the meet due to any reason, mail the reason with proof of absenteeism to deltechmun.memberaffairs@gmail.com",
    // },
    // {
    //   id:"update-1",
    //   content:
    //     "The training session will be conducted tomorrow (28 October, Saturday) at 12pm in online mode.Reiterating, it is mandatory for all to attend, the very basic structure and RoPs would be discussed in tomorrow’s training session.",
    // },
  ];

  return (
    <>
      {/* <SectionTitle
        title="Updates"
        excerpt="Find all the important updates related to the society here."
      /> */}
      <div className="h-80 bg-[#040b23] bg my-10 py-5 text-gray-300 mx-auto overflow-y-scroll no-scrollbar max-w-4xl rounded-3xl font-merriweather">
        <h1 className="text-center text-[36px] font-bold tracking-wider mb-4">Important Updates</h1>
        <hr className="border-gray-400 mx-6"/>
        {updates.map((update,index) => (
          <div>
          <p className="mt-4 mx-auto text-center text-[14px] text-gray-400 tracking-wider max-w-[475px]" key={index}>{update.content}</p>
          <div className={`h-[2px] w-20 mx-auto mt-2 bg-white ${index == updates.length - 1 ? "hidden" :"block" }`}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImportantUpdate;
