import Image from "next/image";
import Link from "next/link";
import React from "react";

const HireEmployes = () => {
  return (
    <div className="md:grid flex flex-col-reverse px-4 space-y-reverse space-y-6 md:grid-cols-2 py-8 md:py-24 justify-items-center md:px-48">
      <div className="flex flex-col space-y-10">
        <p className="font-semibold text-3xl text-gray-700">
          Hire employees in India. No entity needed.
        </p>
        <p className="font-extralight text-[17.5px] text-slate-500">
          Usually, to hire in India, your business needs an entity. That means a
          local office, an address registered as a subsidiary, and an account
          with a local bank. All of this, plus navigating regional benefits,
          payroll, tax, and HR laws, can take months.
        </p>
        <p className="font-extralight text-slate-500 text-[17.5px]">
          India also treats contractors differently than full-time employees, so
          misclassifying a contractor could lead to fines. Deel lets you hire
          employees in India quickly, easily, and compliantly. We even automate
          tax document collection, payroll, benefits, and more.
        </p>
        <Link href={""}>
          <div
            className="px-8 font-light hover:-translate-y-1 duration-300 hover:bg-white transition-all hover:text-blue-500  cursor-pointer w-fit text-white  hover:opacity-90 bg-pink-500 rounded-full
             py-3 text-base"
          >
            Request a Demo
          </div>
        </Link>
      </div>
      <div className="">
        <Image
          src={
            "https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/India-1.png"
          }
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default HireEmployes;
