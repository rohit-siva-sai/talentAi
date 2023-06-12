import React from "react";
import { ImPower } from "react-icons/im";
import { RiTimerFill } from "react-icons/ri";
import { FaThumbsUp } from "react-icons/fa";
import Hirenow from "./hirenow";

const Business = () => {
  return (
    <div className="pt-12 pb-20" >
      <p className="text-2xl text-center font-semibold text-gray-800 " >Why businesses choose Turing</p>
      <div className="flex md:flex-row flex-col md:justify-center md:items-center mx-auto w-fit space-y-6 md:space-y-0 items-start pb-14 pt-16 md:space-x-28">
        <div className=" flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <div className="bg-green-100 p-2 rounded-lg ">
              <ImPower className="text-green-500" size={15} />
            </div>
            <p className="text-gray-800 font-semibold">Speed</p>
          </div>
          <p className="text-3xl font-medium  text-green-500">4 days</p>
          <p className="text-gray-800">
            to fill{" "}
            <span className="text-green-500 font-medium">
              most roles, <br />
            </span>
            sometimes same day
          </p>
        </div>
        <div className=" flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <div className="bg-green-100 p-2 rounded-lg ">
              <RiTimerFill className="text-green-500" size={18} />
            </div>
            <p className="text-gray-800 font-semibold">Time Saved</p>
          </div>
          <p className="text-3xl font-medium  text-green-500">50+ hours</p>
          <p className="text-gray-800">
            of engineering team time <br /> saved&nbsp;
            <span className="text-green-500 font-medium">per developer</span>
            &nbsp;on interviewing
          </p>
        </div>
        <div className=" flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <div className="bg-green-100 p-2 rounded-lg ">
              <FaThumbsUp className="text-green-500" size={15} />
            </div>
            <p>Speed</p>
          </div>
          <p className="text-3xl font-medium  text-green-500">97%</p>
          <p className="text-gray-800">
            engagement <br />
            <span className="text-green-500 font-medium">success rate.</span>
          </p>
        </div>
      </div>
      <Hirenow/>
    </div>
  );
};

export default Business;
