import Link from "next/link";
import React from "react";
const array = [
  {
    index: 1,
    heading: "Tell us the skills you need",
    matter: "We&#39;ll schedule a call and understand your requirements.",
  },
  {
    index: 2,
    heading: "We find the best talent for you",
    matter: "Get a list of pre-vetted candidates within days.",
  },
  {
    index: 3,
    heading: "Schedule interviews",
    matter: "Meet and select the developers you like.",
  },
  {
    index: 4,
    heading: "Begin your trial",
    matter: "Start building with a no-risk 2-week trial period.",
  },
];

const HowItWorks = () => {
  return (
    <div className="md:mx-48  px-4 mb-16 mt-10 ">
      <p className="font-semibold text-center text-3xl text-gray-800 pb-20 ">
        How to hire top remote developers through Turing?
      </p>
      <div className="grid grid-cols-4 gap-x-16">
        {array.map((item) => {
          return (
            <div className="flex flex-col space-y-2 justify-start items-start">
              <p className="text-white bg-black h-7 w-7 flex items-center justify-center  rounded-full">
                {item.index}
              </p>
              <p className="font-medium text-xl text-gray-900">
                {item.heading}
              </p>
              <p className="text-gray-700 font-normal">{item.matter}</p>
            </div>
          );
        })}
      </div>

      <Link href={"/profiles"}>
        <div
          className="px-10 mt-12 md:px-12 cursor-pointer mx-auto md:mx-auto w-fit text-white  bg-blue-500 rounded-md
             py-2 text-sm md:text-base font-medium hover:opacity-90"
        >
          Hire Developers
        </div>
      </Link>
    </div>
  );
};

export default HowItWorks;
