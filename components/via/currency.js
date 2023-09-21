import Image from "next/image";
import React from "react";
const array = [
  {
    image:
      "https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/Global%20Hiring%20Guides/Group%20(1).png",
    title: "Currency",
    matter: "Indian Rupee (INR)",
  },
  {
    image:
      "https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/Global%20Hiring%20Guides/Screen%20Shot%202021-06-30%20at%2010.59%201.png",
    title: "Capital",
    matter: "New Delhi",
  },
  {
    image:
      "https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/Global%20Hiring%20Guides/Image%20(8).png",
    title: "Official Language",
    matter: "Hindi and 22 additional languages",
  },
  {
    image:
      "https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/Global%20Hiring%20Guides/Image%20(9).png",
    title: "Payroll Cycle",
    matter: "Monthly",
  },
];

const Currency = () => {
  return (
    <div className="md:flex md:flex-nowrap px-4 md:px-0 gap-y-6 py-16 md:space-x-8 md:pt-6 grid grid-cols-2 gap-x-3 md:pb-12 md:justify-center md:items-center">
      {array.map((item) => {
        return (
          <div className="flex md:w-52  flex-col space-y-3 items-center">
            <picture>
              <img src={item.image} loading="lazy" alt="" className="rounded-full md:w-full md:mx-0 mx-auto w-4/5 "  />
            </picture>
            {/* <Image src={item.image} width={200} height={200} className="rounded-full" /> */}
            <p className="text-xl font-medium text-gray-600">{item.title}</p>
            <p className="font-normal text-gray-500 text-center text-base">{item.matter}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Currency;
