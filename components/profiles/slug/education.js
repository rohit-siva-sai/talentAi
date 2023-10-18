import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Education = ({ education }) => {
  // console.log("ss", education);

  const [collapse, setCollapse] = useState(false);
  return (
    <div className="flex flex-col  border-2 md:px-4 px-2 py-2 md:py-4 rounded-lg">
      <div
        onClick={() => {
          setCollapse(!collapse);
        }}
        className="cursor-pointer  font-semibold text-gray-800 flex justify-between items-center"
      >
        <p>Education</p>
        <MdKeyboardArrowDown
          size={30}
          className={` ${
            collapse ? "rotate-180" : "rotate-0"
          } transition-all duration-500 `}
        />
      </div>
      {collapse && (
        <div className="mt-8 mb-8 px-8 flex flex-col space-y-8">
          {education.map((item) => {
            return (
              <div className="flex  items-start justify-between">
                <div className="flex flex-col space-y-1 md:space-y-3">
                  <div className="font-medium  text-gray-600 text-sm md:hidden flex   items-center space-x-2">
                    <p>{item.joinedYear}</p>
                    <p>-</p>
                    <p>{item.graduatedYear}</p>
                  </div>

                  <p className="font-bold text-gray-800 ">{item.degreeName}</p>
                  <p className="text-gray-600 md:text-base text-sm ">
                    {item.college}
                  </p>
                </div>
                <div className="hidden md:flex  items-center space-x-2">
                  <p>{item.joinedYear}</p>
                  <p>-</p>
                  <p>{item.graduatedYear}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Education;
