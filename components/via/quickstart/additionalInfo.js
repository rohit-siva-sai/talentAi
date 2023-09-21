import React from "react";
const contract = [
  "Name",
  "Job role and job description",
  "Leaves",
  "Employee obligation",
  "Termination conditions",
];

const AdditionalInfo = () => {
  return (
    <div className="flex flex-col space-y-12  md:space-y-16">
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-6  ">
        <p className="col-span-2 text-xl text-[#15357a] font-medium">
          Employment Contract Details
        </p>
        <div className="col-span-4 flex flex-col space-y-6 ">
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            Contracts must be in English and can be bilingual. They must be in
            writing and signed by both parties.
          </p>
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            A contract must include:
          </p>
          <ul className="list-disc font-extralight list-inside text-[15px] flex flex-col space-y-6  text-[#15357a]/80 ">
          {contract.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-6  ">
        <p className="col-span-2 text-xl text-[#15357a] font-medium">
        Probation Period
        </p>
        <div className="col-span-4 ">
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
          Probation periods are not mandatory and there is no statutory requirement for employers to provide probation period. The standard probation period for India in the Employment Agreement is 6 months with the option to extend an additional 3 months at the employer&#39;s discretion.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
