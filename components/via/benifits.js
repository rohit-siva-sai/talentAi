import Image from "next/image";
import React from "react";

const Benifits = () => {
  return (
    <div className="bg-[#15357a] py-16 md:py-24 md:px-0 px-4 flex flex-col items-center">
      <p className="text-center w-3/4 leading-[40px] text-3xl md:w-7/12 md:leading-[65px] text-white font-semibold md:text-5xl">
        All the necessary benefits for India built right in
      </p>
      <p className="text-white/80 w-11/12 md:w-full text-center text-lg font-thin md:mt-12 mt-8 mb-12 md:mb-24 ">
        Deel allows you to provide localized benefits for employees in India
        within minutes. All in one manageable online dashboard.
      </p>
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 justify-center">
        <div className="w-68 space-x-4    flex items-center ">
          <Image
            src={
              "https://letsdeel.com/hubfs/Global%20Hiring%20Guides/Benefits%20section/Pension%20fund/Badge_turquoise.svg"
            }
            width={80}
            height={80}
          />
          <p className="text-white  leading-relaxed">
            Employees Pension Scheme
          </p>
        </div>
        <div className="w-68 space-x-4    flex items-center ">
          <Image
            src={
              "https://letsdeel.com/hubfs/Global%20Hiring%20Guides/Benefits%20section/Health%20Insurance/HealthInsurance_pink.svg"
            }
            width={80}
            height={80}
          />
          <p className="text-white  leading-relaxed">
            Employees Provident Fund
          </p>
        </div>
        <div className="w-68 space-x-4    flex items-center ">
          <Image
            src={
              "https://letsdeel.com/hubfs/Global%20Hiring%20Guides/Benefits%20section/Health%20Insurance/HealthInsurance_blue.svg"
            }
            width={80}
            height={80}
          />
          <p className="text-white  leading-relaxed">
            Healthcare - Plum (optional)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
