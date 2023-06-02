import React from "react";
import Details from "./details";
import DetailsList from "./detailsList";
import Guide from "./guide";

const Engineers = () => {
  return (
    <div className="bg-gray-100 px-24 py-10">
      <div>
        <p className="text-gray-800 px-24 pb-12   text-3xl font-medium">
          Hire the top 1% of 2 million+ <br /> engineers who have applied for
          Turing
        </p>
        <div className="flex justify-center space-x-4">
          <DetailsList />
          <Guide />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Engineers;
