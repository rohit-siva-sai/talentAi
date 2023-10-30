import { profileFilter } from "@/useStore/filterProfile";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const experience = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "Beginner",
    value: "Beginner",
  },
  {
    label: "Intermediate",
    value: "Intermediate",
  },
  {
    label: "Advanced",
    value: "Advanced",
  },
];

const ExperienceFilter = () => {
  const [showExp, setShowExp] = useState(false);
  const [present, setPresent] = useState(0);
  const [allProfiles, filterByCategory, updateProfiles] = profileFilter(
    (store) => [store.allProfiles, store.filterByCategory, store.updateProfiles]
  );

  const filterByExp = (value) => {
    let list = allProfiles
    if (value == "Beginner")
      list = allProfiles.filter((item) => item.experience < 3);
    else if (value == "Intermediate")
      list = allProfiles.filter(
        (item) => item.experience >= 3 && item.experience < 5
      );
    else if (value == "Advanced")
      list = allProfiles.filter((item) => item.experience >= 5);

    updateProfiles(list);
  };

  return (
    <div
      className={`flex border-t ${
        showExp ? "pb-4" : "pb-0"
      } bg-white overflow-hidden transition-transform duration-500 flex-col  `}
    >
      <div
        className="flex z-30 py-2  items-center bg-white  justify-between cursor-pointer "
        onClick={() => {
          setShowExp(!showExp);
        }}
      >
        <p className="font-semibold text-gray-600">Experience</p>
        <MdOutlineKeyboardArrowDown
          size={30}
          className={`transition-transform duration-300 text-gray-600  ${
            showExp ? "rotate-180" : "rotate-0"
          } `}
        />
      </div>

      <div
        className={`flex transition-transform  duration-500 flex-col ${
          showExp ? "" : "-translate-y-[100%] h-0  py-0"
        } space-y-3`}
      >
        {experience.map((item, index) => {
          return (
            <div
              className={` ${
                present == index ? "font-bold text-lime-600" : "font-medium"
              } ease-in-out text-sm cursor-pointer hover:underline underline-offset-4 hover:text-lime-600 decoration-lime-500 text-gray-700 `}
              onClick={() => {
                setPresent(index);
                filterByExp(item.value);
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceFilter;