import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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

const CategoryFilter = ({CategoryFilter,filterDeveloper}) => {
  const [showCategory, setShowCategory] = useState(true);
  const [present, setPresent] = useState(0);



  return (
    <div className="col-span-3  md:sticky   md:top-28  md:px-2">
      <p className="font-semibold text-gray-600 text-lg mb-4">Filter By</p>
      <div
        className={`flex border-y bg-white overflow-hidden transition-transform duration-500 flex-col ${
          showCategory ? "-translate-y-0 " : "-translate-y-0"
        } space-y-2 `}
      >
        <div
          className="flex z-30 py-1  items-center bg-white  justify-between cursor-pointer "
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
              showCategory ? "" : "-translate-y-[100%] h-0"
            } space-y-3 py-0`}
          >
            {category.map((item, index) => {
              return (
                <div
                  className={` ${
                    present == index ? "font-bold text-lime-600" : "font-medium"
                  } ease-in-out text-sm cursor-pointer hover:underline underline-offset-4 hover:text-lime-600 decoration-lime-500 text-gray-700 `}
                  onClick={() => {
                    setPresent(index)
                    filterDeveloper(item.value)
                  }}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
        
      </div>
    </div>
  );
};

export default CategoryFilter;
