import React from "react";
import { RiStarFill } from "react-icons/ri";

const Skills = ({ skills, size = null,message }) => {
  // console.log("skils", skills);

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <div className="flex items-center space-x-2 pr-8 px-3 py-1 rounded-br-full justify-center mb-2 bg-gray-800 w-fit  ">
          <RiStarFill className="text-yellow-400" />
          <p className="text-white  text-sm font-semibold ">Expert in</p>
        </div>
        <div className="flex  flex-wrap">
          {skills?.map((item) => {
            return item.skill.map((itemIn) => {
              return (
                <div>
                  {item.skillLevel == "Advanced" && (
                    <div
                      className={`px-2 my-1 mr-2  border border-gray-400 bg-lime-50/90 text-xs md:text-sm  py-[2px] text-${
                        size ? size : "xs"
                      } rounded-md font-medium  text-gray-800`}
                    >
                      <p>
                        {itemIn} | {item.exYear} yr
                      </p>
                    </div>
                  )}
                </div>
              );
            });
          })}
        </div>
      </div>
      <div>
          <p className="line-clamp-2 text-[15px] text-gray-700">
            {message}
          </p>
        </div>
      <div>
        <p className="text-gray-700  font-semibold mb-2">
          Additional Skills
        </p>
        <div className="flex  flex-wrap">
          {skills?.map((item) => {
            return item.skill.map((itemIn) => {
              return (
                <div>
                  {!(item.skillLevel == "Advanced") && (
                    <div
                      className={`px-2 my-1 mr-2   border border-gray-400 text-xs md:text-sm  py-[2px] text-${
                        size ? size : "xs"
                      } rounded-md font-medium  text-gray-800`}
                    >
                      <p>
                        {itemIn} | {item.exYear} yr
                      </p>
                    </div>
                  )}
                </div>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
