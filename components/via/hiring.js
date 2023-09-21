import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hiring = () => {
  return (
    <div className="py-12 md:py-24 flex flex-col space-y-10 px-4 md:px-0 md:space-y-16 items-center bg-[#15357a]">
      <p className="text-center  text-white font-semibold text-3xl md:text-5xl">
        Hiring in India, hassle-free
      </p>
      <p className="text-center md:w-2/3   text-white/90 font-extralight text-base">
        With Deel, your business can easily hire employees in India. No more
        worrying about local laws, complex tax systems, or managing
        international payroll. Deel takes care of everything in 150+ countries.
      </p>
      <div className="flex flex-col space-y-8 items-center">
        <div className="flex flex-col md:flex-row  space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex space-x-8 w-[350px] justify-center pt-6 pb-8 px-6 border rounded-xl items-start">
            <Image
              src={
                "https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/Global%20Hiring%20Guides/Group%20(8).svg"
              }
              width={60}
              height={60}
            />
            <div className="flex flex-col space-y-2">
              <p className="text-5xl font-semibold text-rose-300">599 USD</p>
              <p className="text-white/90 font-extralight">Management fee</p>
            </div>
          </div>
          <div className="flex space-x-8 w-[350px] justify-center pt-6 pb-8 px-6 border rounded-xl items-start">
            <Image
              src={
                "https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/Global%20Hiring%20Guides/Group%20(9).svg"
              }
              width={80}
              height={80}
            />
            <div className="flex flex-col space-y-2">
              <p className="text-5xl font-semibold text-violet-500">5%</p>
              <p className="text-white/90 leading-4 font-extralight">
                Estimate Employer Cost
                <br /> <span className="text-[10px]">*of employee salary</span>
              </p>
            </div>
          </div>
        </div>
        <p className="text-center  text-white/90 font-normal text-lg">
          Want to learn the cost of hiring an employee in India?
        </p>
        <Link href={""}>
          <div
            className="px-8 font-light border hover:-translate-y-1 duration-300 hover:bg-white transition-all hover:text-blue-500  cursor-pointer w-fit text-white  hover:opacity-90 bg-transparent rounded-full
             py-3 text-base"
          >
           View our Employee Cost Calculator
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hiring;
