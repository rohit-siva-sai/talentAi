import React from "react";
import { GiEarthAmerica } from "react-icons/gi";
import { MdLocationPin } from "react-icons/md";
import { HiTrophy, HiAcademicCap } from "react-icons/hi2";
import Skills from "./skills";
import Link from "next/link";

const Explore = ({ developer, skills }) => {
  // console.log("explore", developer);

  return (
    <div className="">
      <div className="">
        <div className="flex items-start justify-between">
          <p className="font-semibold text-gray-600 text-2xl pb-2 ">
            Talent Information
          </p>
          <Link href={"https://client-a550d.web.app"} className="mr-4">
            <div
              className="px-4 md:px-4 cursor-pointer border border-lime-500 mx-auto md:mx-0 w-fit text-lime-700  hover:text-white  hover:bg-lime-600 rounded-md
             py-1 text-sm hover:opacity-90"
            >
              hire now
            </div>
          </Link>
        </div>
        <div className="flex flex-col space-y-4 border-2 md:px-4 px-2 py-2 md:py-4 rounded-lg">
          <div className="flex justify-between items-start border-2 px-4 py-3 rounded-lg">
            <div className="flex space-x-6 items-center">
              <picture>
                <img
                  src={developer.userImage}
                  className="rounded-full w-20 h-20 md:w-28 md:h-28 "
                  alt=""
                />
              </picture>

              <div className="flex flex-col space-y-5">
                <div className="text-green-600 font-semibold flex space-x-1 items-center">
                  <div className="w-3  h-3 rounded-full  bg-green-600 border-2 e"></div>
                  <p>Available to Start now</p>
                </div>
                <div className="flex flex-col space-y-1">
                  <p className="font-semibold text-gray-800 text-xl">
                    {developer.userName}
                  </p>
                  <div className="flex items-center space-x-2">
                    <GiEarthAmerica />
                    <p className="font-medium text-gray-500 text-sm">
                      {developer.timezone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex space-x-2 rounded-xl border  text-gray-700 bg-green-100 px-3 py-1 ">
              <HiTrophy size={18} className="text-yellow-400" />
              <p className="text-xs md:text-base">Suggested match</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-3">
            <div className="flex flex-col space-y-3 px-4 py-3 border-2 rounded-xl">
              <p className="font-semibold text-gray-700">Home Country</p>
              <div className="flex items-center space-x-2">
                <GiEarthAmerica size={18} />
                <p className="first-letter:uppercase font-medium text-gray-500">
                  {developer.country}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 px-4 py-3 border-2 rounded-xl">
              <p className="font-semibold text-gray-700">Current location</p>
              <div className="flex items-center space-x-2">
                <MdLocationPin size={18} />
                <p className="first-letter:uppercase font-medium text-gray-500">
                  {developer.city}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 px-4 py-3 border-2 rounded-xl">
            <p className="font-semibold text-gray-700">Years of experience</p>
            <div className="flex items-center space-x-2">
              <HiAcademicCap size={18} />
              <p className="first-letter:uppercase font-medium text-gray-500">
                - years
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 px-4 py-3 border-2 rounded-xl">
            <p className="font-semibold text-gray-700">About</p>

            <p className=" font-medium text-gray-500">{developer.message}</p>
          </div>
          <div className="flex flex-col space-y-3 px-4 py-3 border-2 rounded-xl">
            <p className="font-semibold text-gray-700">Skills</p>
            <Skills skills={skills} size={"sm"} />
          </div>
        </div>
      </div>
      <div className="">
        <p className="font-semibold py-4 text-gray-600 text-2xl pb-2 ">
          Biggest Achievement
        </p>
        <div className="flex flex-col space-y-3 px-4 py-3 border-2 rounded-xl">
          <p className="font-semibold text-gray-700">Achievement</p>

          <p className=" font-medium text-gray-500">{developer.achievement}</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
