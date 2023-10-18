import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SkillFilter from "./skillFilter";
import { profileFilter } from "@/useStore/filterProfile";

const category = [
  {
    label: "All categories",
    value: "All categories",
  },
  {
    label: "Front end developer",
    value: "Front end developer",
  },
  {
    label: "Devops",
    value: "Devops",
  },
  {
    label: "Accounting & Consulting",
    value: "Accounting & Consulting",
  },
  {
    label: "Admin Support",
    value: "Admin Support",
  },
  {
    label: "Customer Service",
    value: "Customer Service",
  },
  {
    label: "Data Science & Analytics",
    value: "Data Science & Analytics",
  },
  {
    label: "Design & Creative",
    value: "Design & Creative",
  },
  {
    label: "Engineering & Architecture",
    value: "Engineering & Architecture",
  },
  {
    label: "IT & Networking",
    value: "IT & Networking",
  },
  {
    label: "Legal",
    value: "Legal",
  },
  {
    label: "Sales & Marketing",
    value: "Sales & Marketing",
  },
  {
    label: "Translation",
    value: "Translation",
  },
];

const CategoryFilter = ({ CategoryFilter, filterDeveloper }) => {
  const [showCategory, setShowCategory] = useState(false);
  const [present, setPresent] = useState(0);
  const [allProfiles, filterByCategory] = profileFilter((store) => [
    store.allProfiles,
    store.filterByCategory,
  ]);
// console.log('dssd',allProfiles);

  // const filterDeveloper = (role) => {
  //   if (role == "All categories") {
  //     // upd(profiles);
  //     return;
  //   }

  //   const data = profiles.filter((item) => item.role === role);
  //   setFilterDeveloperData(data);
  // };


  return (
    <div
      className={`flex border-t ${
        showCategory ? "pb-4" : "pb-0"
      } bg-white overflow-hidden transition-transform duration-500 flex-col  `}
    >
      <div
        className="flex z-30 py-2  items-center bg-white  justify-between cursor-pointer "
        onClick={() => {
          setShowCategory(!showCategory);
        }}
      >
        <p className="font-semibold text-gray-600">Category</p>
        <MdOutlineKeyboardArrowDown
          size={30}
          className={`transition-transform duration-300 text-gray-600  ${
            showCategory ? "rotate-180" : "rotate-0"
          } `}
        />
      </div>

      <div
        className={`flex transition-transform  duration-500 flex-col ${
          showCategory ? "" : "-translate-y-[100%] h-0  py-0"
        } space-y-3`}
      >
        {category.map((item, index) => {
          return (
            <div
              className={` ${
                present == index ? "font-bold text-lime-600" : "font-medium"
              } ease-in-out text-sm cursor-pointer hover:underline underline-offset-4 hover:text-lime-600 decoration-lime-500 text-gray-700 `}
              onClick={() => {
                setPresent(index);
                filterByCategory(item.value);
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

export default CategoryFilter;
