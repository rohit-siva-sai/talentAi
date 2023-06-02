import React from "react";

const array = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Pepsi_logo_2008.svg/1920px-Pepsi_logo_2008.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1198px-Dell_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Johnson_and_Johnson_Logo.svg/1920px-Johnson_and_Johnson_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo-Iron-Mark-Black.svg/800px-Volvo-Iron-Mark-Black.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Reddit_logo.svg/768px-Reddit_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/1200px-Disney%2B_logo.svg.png",
];

const Companies = () => {
  return (
    <div className="pt-16" >
      <p className="text-gray-500 font-medium text-sm" >
        Join 900+ companies who have trusted Turing for their remote engineering
        needs.
      </p>
      <div className="flex space-x-6 items-center pt-6 " >
        {array.map((item) => {
          return (
            <picture>
              <img src={item} alt="" className="w-full h-8" />
            </picture>
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
