import Link from "next/link";
import React from "react";
import Offering1 from "./matter/offering1";
import Offering2 from "./matter/offering2";
import Offering3 from "./matter/offering3";
import Offering4 from "./matter/offering4";
import Offering5 from "./matter/offering5";

const Offerings = () => {
  return (
    <div className="md:px-48 px-4 py-12">
     <p className="text-gray-800 text-3xl font-semibold ">Our AI service offerings</p>
      <div className="pt-20 flex md:px-4 justify-between ">
        <div className="w-1/3  ">
          <div className="sticky top-8 py-4   left-36 h-fit hidden md:flex flex-col space-y-5">
            <Link href={"#1"}>
              <p className="font-semibold hover:text-gray-600 ">AI Implementation Strategy</p>
            </Link>
            <Link href={"#2"}>
              <p className="font-semibold hover:text-gray-600 ">Data Engineering</p>
            </Link>
            <Link href={"#3"}>
              <p className="font-semibold hover:text-gray-600 ">AI Transformation Accelerator</p>
            </Link>
            <Link href={"#4"}>
              <p className="font-semibold hover:text-gray-600 ">ML Operations</p>
            </Link>
            <Link href={"#5"}>
              <p className="font-semibold hover:text-gray-600 ">ML Model Development</p>
            </Link>
          </div>
        </div>
        <div className="flex md:w-2/3 flex-col space-y-12">
          <div id="1">
            <Offering1 />
          </div>
          <div id="2">
            <Offering2 />
          </div>
          <div id="3">
            <Offering3 />
          </div>
          <div id="4">
            <Offering4 />
          </div>
          <div id="5">
            <Offering5 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
