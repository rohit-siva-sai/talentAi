import Link from "next/link";
import React, { useState } from "react";
import Offering1 from "./matter/offering1";
import Offering2 from "./matter/offering2";
import Offering3 from "./matter/offering3";
import Offering4 from "./matter/offering4";
import Offering5 from "./matter/offering5";

const Offerings = () => {
  const [active, setActive] = useState("");

  const handleClick = (menuId) => {
    setActive(menuId)
  }

  return (
    <div className="md:px-48 px-4 py-12">
      <p className="text-gray-800 text-3xl font-semibold ">
        Our AI service offerings
      </p>
      <div className="pt-20 flex md:px-4 justify-between ">
        <div className="w-1/3  ">
          <div className="sticky top-8 py-4   left-36 h-fit hidden md:flex flex-col  border-blue-500">
            <Link
              href={"#1"}
              onClick={() => {
                handleClick("1");
              }}
            >
              <p
                className={`font-semibold border-l-4 px-4 py-4 ${
                  active === "1" ? "text-gray-500 border-blue-500" : ""
                }  `}
              >
                AI Implementation Strategy
              </p>
            </Link>
            <Link
              href={"#2"}
              onClick={() => {
                handleClick("2");
              }}
            >
              <p
                className={`font-semibold  border-l-4 px-4 py-4 ${
                  active === "2" ? "text-gray-500 border-blue-500" : ""
                }  `}
              >
                Data Engineering
              </p>
            </Link>
            <Link
              href={"#3"}
              onClick={() => {
                handleClick("3");
              }}
            >
              <p
                className={`font-semibold  border-l-4 px-4 py-4 ${
                  active === "3" ? "text-gray-500 border-blue-500" : ""
                }  `}
              >
                AI Transformation Accelerator
              </p>
            </Link>
            <Link
              href={"#4"}
              onClick={() => {
                handleClick("4");
              }}
            >
              <p
                className={`font-semibold  border-l-4  px-4 py-4 ${
                  active === "4" ? "text-gray-500 border-blue-500" : ""
                }  `}
              >
                ML Operations
              </p>
            </Link>
            <Link
              href={"#5"}
              onClick={() => {
                handleClick("5");
              }}
            >
              <p
                className={`font-semibold  border-l-4 px-4 py-4 ${
                  active === "5" ? "text-gray-500 border-blue-500" : ""
                }  `}
              >
                ML Model Development
              </p>
            </Link>
          </div>
        </div>
        <div className="flex md:w-2/3 flex-col space-y-12">
          <div
            id="1"
            onMouseOver={() => {
              handleClick("1");
            }}
          >
            <Offering1 />
          </div>
          <div
            id="2"
            onMouseOver={() => {
              handleClick("2");
            }}
          >
            <Offering2 />
          </div>
          <div
            id="3"
            onMouseOver={() => {
              handleClick("3");
            }}
          >
            <Offering3 />
          </div>
          <div
            id="4"
            onMouseOver={() => {
              handleClick("4");
            }}
          >
            <Offering4 />
          </div>
          <div
            id="5"
            onMouseOver={() => {
              handleClick("5");
            }}
          >
            <Offering5 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
