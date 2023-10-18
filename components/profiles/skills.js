import React from "react";

const Skills = ({ skills, size = null }) => {
  return (
    <div className="flex  flex-wrap">
      {skills?.map((item) => {
        return item.skill.map((itemIn) => {
          return (
            <div
              className={`px-2 my-1 ml-2  border text-xs md:text-base  py-[2px] text-${
                size ? size : "xs"
              } rounded-xl font-medium bg-lime-100/50 text-gray-700`}
            >
              <p>
                {itemIn} + {item.exYear} yr
              </p>
            </div>
          );
        });
      })}
    </div>
  );
};

export default Skills;
