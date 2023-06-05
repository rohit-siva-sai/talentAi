import React from "react";
import { AiFillStar } from "react-icons/ai";
const Details = ({
  imgUrl,
  name,
  work,
  experience,
  availability,
  matter,
  skills,
  worked,
}) => {
  return (
    <div>
      <div className="md:w-[800px] w-full bg-white border shadow-md px-4 py-4">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <picture>
              <img src={imgUrl} alt="" className="w-12 rounded-lg" />
            </picture>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-semibold first-letter:uppercase text-gray-800">
                  {name}
                </p>
                <p className="text-xs font-semibold text-gray-500">{work}</p>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="flex space-x-1 items-center">
                  <p className="text-xs font-semibold text-gray-500">
                    Experience:{" "}
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    {experience}
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="text-xs font-semibold text-gray-500">
                    Availability:{" "}
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    {availability}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex hidden text-white h-10 cursor-pointer bg-blue-500 items-center space-x-1 px-3 py-0 rounded-md">
            Hire {name}
          </div>
        </div>
        <p className="pt-5 md:px-2 text-gray-700 text-sm font-medium">
          {matter}
        </p>
        <div className="flex md:flex-row flex-col space-y-6 md:justify-between items-start md:items-center pt-5">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 ">
              <AiFillStar className="text-amber-500" />
              <p className="text-sm text-gray-800 font-semibold">Expert in</p>
            </div>
            <div className="flex flex-wrap space-x-1">
              {skills.map((item) => {
                return (
                  <div className="bg-gray-100 px-2 text-[13px] text-gray-500 font-medium rounded py-1">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div>
              <p className="text-sm text-gray-800 font-semibold">
                Also worked with
              </p>
            </div>
            <div className="flex flex-wrap space-x-2">
              {worked.map((item) => {
                return (
                  <div className="bg-gray-100 px-2 text-[13px] text-gray-500 font-medium rounded py-1">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex  text-white h-10 cursor-pointer bg-blue-500 items-center space-x-1 px-3 py-0 rounded-md">
            Hire {name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
