import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Ri4KLine, RiUsbFill } from "react-icons/ri";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExperience = ({ workExperience }) => {
  console.log("work", workExperience.reverse());
  const [collapse, setCollapse] = useState(false);

  return (
    <div>
      <div className="flex flex-col  border-2 md:px-4 px-2 py-2 md:py-4 rounded-lg">
        <div
          onClick={() => {
            setCollapse(!collapse);
          }}
          className="cursor-pointer  font-semibold text-gray-800 flex justify-between items-center"
        >
          <p>Work Experience</p>
          <MdKeyboardArrowDown
            size={30}
            className={` ${
              collapse ? "rotate-180" : "rotate-0"
            } transition-all duration-500 `}
          />
        </div>
        {collapse && (
          <div className={`mt-4 transition-all duration-500 overflow-hidden `}>
            <VerticalTimeline layout="1-column-left" lineColor="#9bda92">
              <div className="flex flex-col space-y-10 md:space-y-16 ">
                {workExperience.reverse().map((work) => {
                  return (
                    <div className="mt-0">
                      <VerticalTimelineElement
                        className="vertical-timeline-element--work   "
                        contentStyle={{
                          //   background: "#9bda92",
                          //   color: "#fff",
                          border: "2px solid #9bda92",
                        }}
                        layout={"2-column"}
                        // contentArrowStyle={{
                        //   borderRight: "7px solid  rgb(33, 150, 243)",
                        // }}

                        iconStyle={{
                          background: "#74e663",
                          color: "#fff",
                        }}
                        icon={<RiUsbFill />}
                      >
                        <div className="px-2 md:px-8">
                          <div className="flex items-start  justify-between ">
                            <div className="flex flex-col space-y-0  ">
                              <p
                                className="font-extrabold text-gray-800"
                                style={{ fontWeight: "bold" }}
                              >
                                {work.workRole}
                              </p>
                              <div className="md:hidden flex font-medium text-sm text-gray-600 items-center space-x-2">
                                <p>{work.startYear}</p>
                                <p>-</p>
                                <p>{work.endYear}</p>
                              </div>
                              <p className="font-normal text-gray-600 md:text-xl">
                                {work.companyName}
                              </p>
                            </div>
                            <div className="md:flex hidden items-center space-x-2">
                              <p>{work.startYear}</p>
                              <p>-</p>
                              <p>{work.endYear}</p>
                            </div>
                          </div>
                          <ul className="list-disc flex flex-col w-full md:w-10/12 space-y-2 my-2">
                            {work.aboutRole.map((item) => {
                              return (
                                <li className=" text-gray-600 text-sm md:text-base font-medium">
                                  {item}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </VerticalTimelineElement>
                    </div>
                  );
                })}
              </div>
              <VerticalTimelineElement
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                icon={<BsStars />}
              />
            </VerticalTimeline>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperience;
