"use client";
import React from "react";
import MembersCard from "../components/membersCard";
import {
  senior_Council,
  junior_Council,
  east_Campus,
  administrative_Council,
} from "../lib/memberDetails";

//headlessUi
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MemberPage = () => {
  const lists = [
    "Administrative Council",
    "Senior Council",
    "Junior Council",
    "East Campus",
  ];

  return (
    <>
      <div className="bg-[#040b23]">
        <div
          style={{ backgroundImage: `url(./img/section.png)` }}
          className="w-full h-full bg-center py-3 bg-cover"
        >
          <div className="mx-auto max-w-screen-md text-center md:pt-32 pt-20 md:mb-16 mb-6">
            <h2 className="mb-3 text-3xl lg:text-4xl uppercase tracking-wider font-merriweather font-extrabold text-white ">
              Team Members 
            </h2>
            <p className="font-light text-gray-400 sm:text-xl font-serif p-4">
            DelTech MUN & DebSoc stands 56 Council Members and 60+ Diplomats strong. Ready to take onto ant challenge of the world. Reach out to us ! We are happy to discuss the pressing problems of the world even when the clock strikes midnight.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-2 py-16 sm:px-0">
        <Tab.Group defaultIndex={0}>
          <Tab.List className="flex space-x-1 rounded-xl bg-[#040b23] p-1 max-w-xl mx-auto">
            {lists.map((list) => (
              <Tab
                key={list}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-serif font-medium leading-5 text-[#E6E6FA]",
                    "focus:outline-none focus:text-[#33CCCC] focus:bg-[#161f3b]",
                    selected
                      ? "shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {list}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            {/* administrative_Council */}
            <Tab.Panel className="mt-16 max-w-screen-xl mx-auto">
              <div className="flex flex-wrap justify-center gap-12">
                {administrative_Council.map((member, index) => (
                  <MembersCard
                    key={`member-${index}`}
                    index={index}
                    member={member}
                  />
                ))}
              </div>
            </Tab.Panel>

            {/* Senior Council Panel */}
            <Tab.Panel className="mt-16 max-w-screen-xl mx-auto">
              <div className="flex flex-wrap justify-center gap-12">
                {senior_Council.map((member, index) => (
                  <MembersCard
                    key={`member-${index}`}
                    index={index}
                    member={member}
                  />
                ))}
              </div>
            </Tab.Panel>

            {/* Junior Council Panel */}
            <Tab.Panel className="mt-16 max-w-screen-xl mx-auto">

              <div className="flex flex-wrap justify-center gap-12">
                {junior_Council.map((member, index) => (
                  <MembersCard
                    key={`member-${index}`}
                    index={index}
                    member={member}
                  />
                ))}
              </div>
            </Tab.Panel>

            {/* East Campus Panel */}
            <Tab.Panel className="mt-16 max-w-screen-xl mx-auto">

              <div className="flex flex-wrap justify-center gap-12">
              

                {east_Campus.map((member, index) => (
                  <MembersCard
                    key={`member-${index}`}
                    index={index}
                    member={member}
                    campus="EAST CAMPUS"
                  />
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default MemberPage;
//blue-900/20
//blue-700
//#CCCCCC
//  blue-400
// ring-white ring-opacity-60 ring-offset-2 ring-offset-[#3366cc] focus:ring-1
