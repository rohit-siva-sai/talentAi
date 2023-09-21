import React from "react";
const holidays = [
  "New Year's Day",
  "Lohri",
  "Makar Sankranti",
  "Republic Day",
  "Maha Shivratri",
  "Holi",
  "Ugadi",
  "Ram Navami",
  "Mahavir Jayanti",
  "Good Friday",
  "Eid al-Fitr",
  "Buddha Purnima",
  "Bakri Eid",
  "Muharram",
  "Rakshabandhan",
  "Independence Day",
  "Janmashtami",
  "Ganesh Chaturthi",
  "Onam",
  "Gandhi Jayanti",
  "Dussehra",
  "Eid-e-Milad",
  "Diwali",
  "Guru Nanak Jayanti",
  "Christmas"
];

const Statutory = () => {
  return (
    <div className="flex flex-col space-y-12 md:space-y-16">
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-6   ">
        <p className="col-span-2 text-xl text-[#15357a] font-medium">
          Paid Time Off
        </p>
        <div className="col-span-4 ">
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            PTO is established in the employment agreements. The minimum PTO is
            18 days.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-6 ">
        <p className="col-span-2 text-xl text-[#15357a] font-medium">
          Public Holidays
        </p>
        <div className="col-span-4 flex flex-col space-y-6 ">
          <p className="font-extralight text-[#15357a]/80 tracking-wide leading-[30px]">
            National holidays include:
          </p>
          <ul className="list-disc font-extralight list-inside text-[15px] flex flex-col space-y-6  text-[#15357a]/80 ">
            {holidays.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Statutory;
