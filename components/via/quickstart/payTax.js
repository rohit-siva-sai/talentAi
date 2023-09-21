import React from "react";
const table = [
  { income: "Up to 250,000", rate: "Exempt" },
  { income: "Between 250,001 – 500,000", rate: "5%" },
  { income: "Between 500,001 – 750,000", rate: "10%" },
  { income: "Between 750,001 – 1,000,000", rate: "15%" },
  { income: "Between 1,000,001 – 1,250,000", rate: "20%" },
  { income: "Between 1,250,001 – 1,500,000", rate: "25%" },
  { income: "Above 1,500,000", rate: "30%" },
];

const PayTax = () => {
  return (
    <div className="flex flex-col space-y-12 md:space-y-20">
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-6 ">
        <p className="md:col-span-2 text-xl text-[#15357a] font-medium">
          Minimum Wage Requirements
        </p>
        <div className="md:col-span-4 flex flex-col space-y-6">
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            The minimum wage in India is complex. There is no statutory minimum
            wage for organizations in the private sector outside of regulated
            “factory” sectors.{" "}
          </p>
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            For factory sectors, India uses a complex method of setting minimum
            wages set at a state and sub-state level that are updated regularly.
            India defines nearly 2,000 different types of jobs for unskilled
            workers and over 400 categories of employment, with a minimum daily
            wage for each kind of job.
          </p>
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            The monthly minimum wage calculation includes the variable dearness
            allowance (VDA) component, which accounts for inflationary trends
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-6 ">
        <p className="col-span-2 text-xl text-[#15357a] font-medium">
          Individual Income Tax
        </p>
        <div className="col-span-4 flex flex-col space-y-6">
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            The individual income tax ranges from 5% to 30%. Income tax is
            calculated according to progressive rates. India Income comprises 2
            regimes, the New Personal Tax Regime (NPTR) and the old regime.
            Taxpayers have the option to choose either one of the regimes.
          </p>
          <div className="flex flex-col space-y-6">
            <p className="font-extralight text-[#15357a]/80 ">
              The table below reflects New Personal Tax Regime (NPTR) effective
              1 April 2020:
            </p>
            <div>
              <div className="grid-cols-3  grid  border-[#15357a]    border ">
                <p className="col-span-2 py-4 border-r text-white bg-[#15357a] px-8 font-extralight text-[#15357a]/80 ">
                  Gross Annual Income (INR)
                </p>
                <p className="col-span-1 py-4 font-extralight text-[#15357a]/80  text-white bg-[#15357a] px-8">
                  Tax Rate (%)
                </p>
              </div>
              <div className="">
                {table.map((item) => (
                  <div className="grid-cols-3  grid align-middle border-[#15357a]    border-x border-b ">
                    <p className="col-span-2 font-extralight text-[#15357a]/80  border-r border-[#15357a]  py-4 px-8">
                      {item.income}
                    </p>
                    <p className=" col-span-1 font-extralight text-[#15357a]/80  py-4 px-8">
                      {item.rate}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-6  ">
        <p className="col-span-2 text-xl text-[#15357a] font-medium">
          Employer Cost
        </p>
        <div className="col-span-4 flex flex-col space-y-6">
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            Estimated employer cost is 5% of the employee’s salary or INR 1950*.
          </p>
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            During onboarding, the employee will decide how to contribute to the
            Provident Fund. Employees can choose to have their contributions
            calculated based on their basic monthly salary (40% of the gross
            monthly salary) or based on a fixed amount of INR 15,000. The
            employer costs for the Employee's Provident Fund and the related
            Administrative charges will be calculated based on the employee's
            decision. The Employees' Deposit Linked Insurance (EDLI) cost will
            be 0.5% of INR 15,000 (INR 75) in both cases.
          </p>
          <div className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            <p>
              - Employee's Provident Fund: 4.8% of the employee&#39;s monthly
              gross salary (12% of the basic salary) or INR 1800
            </p>
            <p>
              {" "}
              Provident Fund Administrative Charges: 0.2% of the employee&#39;s
              monthly gross salary (0.50% of the basic salary) or INR 75{" "}
            </p>
            <p>
              - Employees' Deposit Linked Insurance (EDLI): 0.5% of INR 15,000
              (INR 75)
            </p>
          </div>
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            *Employees in India can choose their Provident Fund contribution,
            which needs to be matched by the employer. Employees can decide to
            contribute a percentage of their basic salary (40% of the employee's
            monthly gross salary) or a fixed fee. This will affect the employer
            costs.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-6  ">
        <p className="col-span-2 text-xl text-[#15357a] font-medium">
          Overtime Pay & Maximum Hours
        </p>
        <div className="col-span-4 flex flex-col space-y-6">
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            Standard working hours are 8 hours per day, 40 hours per week. The
            standard workweek is from Monday to Friday.
          </p>
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            There are no statutory requirements for employees in the private
            sector outside of factory roles.
          </p>
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            Overtime payment is mandatory for factory workers. For additional
            hours worked, industry practice is to compensate employees with
            pro-rate PTO or additional pay at 100% of their regular salary.
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default PayTax;
