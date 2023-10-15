import React from "react";
import Faq1 from "./faqs/faq1";
import Faq2 from "./faqs/faq2";
import Faq3 from "./faqs/faq3";

const Faqs = () => {
  return (
    <div className="md:mx-48 px-4 rounded border py-6 mb-10 mt-6  bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0 gap-x-6 align-middle justify-items-start space-x-6">
        <div className="text-4xl text-gray-900 font-semibold">Frequently asked questions</div>
        <div className="flex flex-col divide-y-2 ">
            <Faq1/>
            <Faq2/>
            <Faq3/>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
