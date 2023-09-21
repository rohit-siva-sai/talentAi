import React from "react";

const Termination = () => {
  return (
    <div className="flex flex-col space-y-12 md:space-y-16">
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-6 ">
        <p className="col-span-2 text-xl text-[#15357a] font-medium">
          Maternity Leave
        </p>
        <div className="col-span-4 flex flex-col space-y-6">
          <p className="font-extralight italic text-xs text-[#15357a]/80 tracking-wide leading-[30px]">
            Terminations must respect complex rules and the rules of an
            employee&#39;s employment country. The off-boarding is always handled by
            the Employer with the primary stakeholders. It may include ad-hoc
            fees as well as required or recommended steps on specific
            termination cases.
          </p>
          <p className="font-extralight  text-[#15357a]/80 tracking-wide leading-[30px]">
            Terminations in India can be done” at-will” (e.i. without cause)
            depending upon the employment agreement as long as required notice
            and severance are followed.
          </p>
          <p className="font-extralight  text-[#15357a]/80   tracking-wide leading-[30px]">
            Compliant terminations include:
          </p>
          <ul className="list-disc font-extralight list-inside text-[15px] flex flex-col space-y-6  text-[#15357a]/80 ">
            <li>Voluntarily by the employee</li>
            <li>By mutual agreement</li>
            <li>Unilaterally by the employer based on:</li>

            <div className="list-disc flex flex-col space-y-6 ml-10">
              <li>Probation period</li>
              <li>Breach of duties and responsibilities</li>
              <li>
                Gross default and misconduct contravening the terms and
                conditions of the agreement
              </li>
            </div>

            <li>By the expiration of the contract</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-6 ">
        <p className="col-span-2 text-xl text-[#15357a] font-medium">
          Notice Period
        </p>
        <div className="col-span-4 ">
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            The minimum notice period is 1 month for ordinary dismissal, but
            this period varies for each state in India.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-6 ">
        <p className="col-span-2 text-xl text-[#15357a] font-medium">
          Severance for Employees
        </p>
        <div className="col-span-4 flex flex-col space-y-6 ">
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            Employees are entitled to severance pay based on the reason for
            termination.
          </p>
          <ul className="list-disc font-extralight list-inside text-[15px] flex flex-col space-y-6  text-[#15357a]/80 ">
            <li>
              Termination caused due to redundancy - Employees are entitled to
              severance pay worth 15 days' average pay for every 1 year of
              continuous service or part thereof in excess of 6 months
            </li>
            <li>
              Employees who are dismissed - Employers must pay termination
              benefits including leave accrued, gratuity payment (for employees
              with over 5 years of continuous service), payment in lieu of
              notice (if no notice is given), statutory bonus payment, and any
              other amounts due under the employment contract.
            </li>
            <li>
              Employees who are terminated due to misconduct - No entitlement to
              notice pay or severance pay
            </li>
          </ul>
          <p className="font-extralight italic text-[#15357a]/80 tracking-wide leading-[27px]">
            To protect you from unforeseen financial risks arising from
            terminations, Deel applies a Severance Accrual to all employment
            agreements in this country. Deel has extensive expertise in managing
            litigation risk globally and our Severance Accrual calculation is
            based on the prevailing common-law or statutory entitlements and
            local best practices. In the event your employee resigns or is not
            entitled to severance, all unused amounts will be returned to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Termination;
