import React from "react";

const LeavePolicy = () => {
  return (
    <div className="flex flex-col space-y-12 md:space-y-16">
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-6  ">
        <p className="col-span-2 text-xl text-[#15357a] font-medium">
          Maternity Leave
        </p>
        <div className="col-span-4 flex flex-col space-y-6">
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            Pregnant employees who have worked with the same employer for 80
            days in the last year are entitled to 26 weeks of paid leave. No
            more than 8 weeks may be taken before the child's birth.
          </p>
          <p className="font-extralight text-xs text-gray-600  tracking-wide leading-[30px]">
            The employee will receive 100% of their average salary during this
            period, and the employer will be responsible for this pay. The
            employee can extend leave without pay
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-6 ">
        <p className="col-span-2 text-xl text-[#15357a] font-medium">
          Paternity Leave
        </p>
        <div className="col-span-4 ">
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            There is no paternity leave currently required by law.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-6 ">
        <p className="col-span-2 text-xl text-[#15357a] font-medium">
          Parental Leave
        </p>
        <div className="col-span-4 ">
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            In India, no law covers parental leave. However, employees may be
            entitled to maternity leave.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-6 ">
        <p className="col-span-2 text-xl text-[#15357a] font-medium">
          Sick Leave
        </p>
        <div className="col-span-4 ">
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            Employees are entitled to paid sick leave for up to 12 days. Sick
            leave accrues at one day of sick leave per month. The employee is
            paid at 100% of their average salary, and the employer is
            responsible for this payment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeavePolicy;
