import React, { useState } from "react";
import PayTax from "./quickstart/payTax";
import LeavePolicy from "./quickstart/leavePolicy";
import Termination from "./quickstart/termination";
import Statutory from "./quickstart/statutory";
import AdditionalInfo from "./quickstart/additionalInfo";
import Onboarding from "./quickstart/onboarding";
import QuickBar from "./quickstart/quickBar";
import Link from "next/link";

const QuickStart = () => {
  const [quick, setQuick] = useState(1);
  const selectQuick = (value) => {
    setQuick(value);
  };
  return (
    <div className=" px-4 md:px-48 py-12 md:py-24">
      <div className="flex flex-col space-y-6 py-8 items-center">
        <p className="text-3xl text-center md:text-start md:text-5xl font-semibold text-[#15357a]">Our quickstart guide to hiring in India</p>
        <p className="text-xl md:text-2xl text-center font-medium md:font-normal text-[#15357a]">Navigate the tabs below to learn everything you need to know about hiring an employee in India</p>
      </div>
      <div className="py-12 md:py-20">
      <QuickBar selectQuick={selectQuick} />
      </div>
      <div className="md:px-6">
        {quick == 1 && <PayTax />}
        {quick == 2 && <LeavePolicy />}
        {quick == 3 && <Termination />}
        {quick == 4 && <Statutory />}
        {quick == 5 && <Onboarding />}
        {quick == 6 && <AdditionalInfo />}
      </div>
      <Link href={""}>
          <div
            className="px-8 mx-auto mt-16 font-light hover:-translate-y-1 duration-300 hover:bg-white transition-all hover:text-blue-500  cursor-pointer w-fit text-white  hover:opacity-90 bg-pink-500 rounded-full
             py-3 text-base"
          >
            Request a Demo
          </div>
        </Link>
    </div>
  );
};

export default QuickStart;
