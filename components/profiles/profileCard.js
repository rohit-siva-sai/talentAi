import React, { useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { TbBadgeFilled } from "react-icons/tb";
import Skills from "./skills";
import Explore from "./explore";
import { Button, Drawer, Progress, Space } from "antd";

const ProfileCard = ({
  developer,
  // education,
  experience,
  identity,
  skills,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(!open);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  // const onClose = () => {
  //   setOpen(false);
  // };
  return (
    <div onClick={showDrawer}>
      <div className=" border px-6  flex flex-col space-y-4 py-4  cursor-pointer hover:bg-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-3 items-center">
              <div className="relative">
                <picture>
                  <img
                    src={developer.userImage}
                    className="rounded-full w-[70px] h-[70px] border"
                    alt=""
                  />
                </picture>
                <div className="w-4 absolute h-4 rounded-full right-0 bottom-2 bg-green-600 border-2 border-white"></div>
              </div>
              <div>
                <p className="font-semibold text-lime-600 text-sm">
                  {developer.userName}
                </p>
                <p className="font-normal text-gray-700 text-sm">
                  {experience?.companyName}
                </p>
                <p className="font-medium text-gray-500 text-sm">
                  {developer.country}
                </p>
              </div>
            </div>
            <div className="flex w-fit ml-1 bg-white px-3 border-2 border-blue-700 rounded-xl space-x-1  opacity-70 items-center ">
              <AiFillThunderbolt className="text-blue-700" size={13} />
              <p className="text-blue-700 text-sm">Available Now</p>
            </div>
          </div>
          <div>symbol</div>
        </div>
        <div className="flex justify-between ml-2">
          <p className="font-semibold text-[15px]  text-gray-500">
            <span className="text-gray-700">$5.00</span>/hr
          </p>
          <p className="font-semibold   text-[15px]  text-gray-500">
            <span className="font-semibold  text-gray-500">$100K+</span> earned
          </p>
          <div className="font-semibold flex felx-col -space-y-1 flex-col  text-[15px]  text-lime-600">
            <p>88% Job Success</p>
            <Progress showInfo={false} strokeColor={"#1f57c3"} className="text-red-600" size={[,5]} percent={88} />
          </div>
          <div className="flex space-x-1 items-center">
            <TbBadgeFilled size={20} className="text-rose-400" />
            <p className="uppercase font-semibold  text-[15px] text-sky-700">
              top rated
            </p>
          </div>
        </div>
        <div>
          <p className="line-clamp-2 text-[15px] text-gray-700">
            {developer.message}
          </p>
        </div>
        <Skills skills={skills} />
      </div>
      <Drawer
        // title="Drawer with extra actions"
        placement={placement}
        width={800}
        className="rounded-l-3xl"
        // onClose={onClose}
        open={open}
        // extra={
        //   <Space>
        //     <Button onClick={()=>{setOpen(false)}}>Cancel</Button>
        //     {/* <Button type="primary" onClick={onClose}>
        //        OK
        //     </Button> */}
        //   </Space>
        // }
      >
        <Explore
          developer={developer}
          education={education}
          experience={experience}
          identity={identity}
          skills={skills}
        />
      </Drawer>
    </div>
  );
};

export default ProfileCard;
