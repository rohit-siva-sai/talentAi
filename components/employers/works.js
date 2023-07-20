import React from "react";
const array = [
  {
    imgUrl:
      "https://interviewing.io/static/images/employers/how-it-works/howitworks--1.svg",
    heading: "Tell us how many engineers you want to interview and when",
    matter:
      "We choose candidates based on past performance in rigorous, live technical interviews. It's a much better predictor of ability than a resume.",
  },
  {
    imgUrl:
      "https://interviewing.io/static/images/employers/how-it-works/howitworks--2.svg",
    heading: " Interview them anonymously on our platform",
    matter:
      " Do whatever you'd normally do in your technical phone screen, except do it anonymously to avoid bias.",
  },
  {
    imgUrl:
      "https://interviewing.io/static/images/employers/how-it-works/howitworks--3.svg",
    heading: "Watch the hires roll in",
    matter:
      " Our candidates convert 3X better than other channels, and we save our customers 220 hours per hire. With us, you can  from first  conversation to offer in less than a week.",
  },
];

const Works = () => {
  return (
    <div className="md:px-48 px-4 py-10 border">
      <p className="text-center font-semibold text-4xl pb-24 md:text-5xl">How it works</p>
      <div className="grid grid-cols-1 gap-y-12 md:gap-y-0 md:grid-cols-3 gap-x-6">
        {array.map((item) => {
          return (
            <div className="flex flex-col  space-y-6 items-center">
              <picture>
                <img
                  src={item.imgUrl}
                  alt=""
                  className="w-32"
                />
              </picture>
              <p className="font-semibold text-center text-[18px]">
               {item.heading}
              </p>
              <p className="text-gray-700 text-[17.2px] w-full md:w-3/4 text-center font-light ">
                {item.matter}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
