import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const array = [
  {
    name: "Pay & Tax",
    value: 1,
  },
  {
    name: "Leave Policy",
    value: 2,
  },
  {
    name: "Termination",
    value: 3,
  },
  {
    name: "Statutory time off",
    value: 4,
  },
  {
    name: "onBoarding",
    value: 5,
  },
  {
    name: "Additional Info",
    value: 6,
  },
];

const QuickBar = ({ selectQuick }) => {
  const [quick, setQuick] = useState(1);
  const [dropDown,setDropDown] = useState(false)
  return (
    <div className="">
      <div className="flex md:hidden items-center border-[#15357a] justify-between px-8 py-4 border rounded-full " onClick={()=>{setDropDown(!dropDown)}} >
        <p className="text-[#15357a] font-normal">Select...</p>
        <MdKeyboardArrowDown className="text-blue-500" size={20}/>
      </div>
      {!dropDown && <div className="flex md:hidden md:mt-0 mt-4  flex-col space-y-3 md:space-y-0 py-4 md:py-0 md:flex-row md:px-0 px-12 md:justify-between bg-gray-50 md:border-none border md:shadow-none shadow-md shadow-[#15357a]  md:rounded-full">
        {array.map((item) => (
          <div
            className={`md:rounded-full transition-all duration-300 cursor-pointer md:px-8  md:py-5  font-semibold  ${
              quick == item.value
                ? "md:bg-blue-600 bg-gray-100 text-[#15357a]/80  md:text-white"
                : "md:bg-transparent text-[#15357a]/80"
            } `}
            onClick={() => {
              setQuick(item.value);
              selectQuick(item.value);
              setDropDown(!dropDown)
            }}
          >
            {item.name}
          </div>
        ))}
      </div>}
      <div className="md:flex hidden md:mt-0 mt-4  flex-col space-y-3 md:space-y-0 py-4 md:py-0 md:flex-row md:px-0 px-12 md:justify-between bg-gray-50 md:border-none border md:shadow-none shadow-md shadow-[#15357a]  md:rounded-full">
        {array.map((item) => (
          <div
            className={`md:rounded-full transition-all duration-300 cursor-pointer md:px-8  md:py-5  font-semibold  ${
              quick == item.value
                ? "md:bg-blue-600 bg-gray-100 text-[#15357a]/80  md:text-white"
                : "md:bg-transparent text-[#15357a]/80"
            } `}
            onClick={() => {
              setQuick(item.value);
              selectQuick(item.value);
              setDropDown(!dropDown)
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickBar;
