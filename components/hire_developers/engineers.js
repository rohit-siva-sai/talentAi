import React from "react";
import Details from "./details";
import DetailsList from "./detailsList";
import Guide from "./guide";

const Engineers = () => {
  return (
    <div className="bg-gray-100 px-4 md:px-24 py-10">
      <div>
        <p className="text-gray-800 md:px-24 pb-12  text-2xl  md:text-3xl font-medium">
          Hire the top 1% of 2 million+ <br /> engineers who have applied for
          Turing
        </p>
        <div className="flex md:flex-row flex-col md:space-y-0 space-y-10 justify-center  md:items-start items-center md:space-x-4">
          <DetailsList />
          <Guide />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Engineers;
