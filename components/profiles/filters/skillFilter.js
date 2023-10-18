import { profileFilter } from "@/useStore/filterProfile";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const skills = [
    {
      label: "All skills",
      value: "All skills",
    },
    {
      label: "Blender",
      value: "Blender",
    },
    {
      label: "React",
      value: "React",
    },
    {
      label: "Python",
      value: "Python",
    },
    {
      label: "Java",
      value: "Java",
    },
    {
      label: "C++",
      value: "C++",
    },
    {
      label: "HTML",
      value: "HTML",
    },
    {
      label: "JavaScript",
      value: "JavaScript",
    },
    {
      label: "Node.js",
      value: "Node.js",
    },
    {
      label: "SQL",
      value: "SQL",
    },
    {
      label: "Photoshop",
      value: "Photoshop",
    },
    {
      label: "Illustrator",
      value: "Illustrator",
    },
    {
      label: "PHP",
      value: "PHP",
    },
    {
      label: "Swift",
      value: "Swift",
    },
    {
      label: "Solidity",
      value: "Solidity",
    },
    // Add more skills as needed
  ];
  

const SkillFilter = ({filterDeveloper}) => {
    const [showSkill, setShowSkill] = useState(false);
    const [present, setPresent] = useState(0);

    const [allProfiles, filterBySkill,updateProfiles] = profileFilter((store) => [
        store.allProfiles,
        store.filterBySkill,
        store.updateProfiles
      ]);

    //   console.log('allprofiles',allProfiles);

      
  const filterSkill = (role) => {
    console.log('role',role);
    
    if (role == "all skills") {
      // upd(profiles);
      updateProfiles(allProfiles)
      return;
    }

    const data = allProfiles.filter((profile) => {
        // Check if the profile has at least one selected skill
        return profile.skills.some((user) => user.skill.map((word)=>word.toLowerCase()).includes(role));
      });

    // const data = allProfiles.filter((item) =>  item.skills.filter((user)=> user.skill.includes(role))  );
    const value = "html/css"
    console.log('datasdd',value.includes("html"));
    
    updateProfiles(data)
    // setFilterDeveloperData(data);
  };

      
  return (
    <div
      className={`flex border-y ${showSkill ? "pb-4": "pb-0"} bg-white overflow-hidden transition-transform duration-500 flex-col space-y-2 `}
    >
      <div
        className="flex z-30 py-2  items-center bg-white  justify-between cursor-pointer "
        onClick={() => {
          setShowSkill(!showSkill);
        }}
      >
        <p className="font-semibold text-gray-600">Skills</p>
        <MdOutlineKeyboardArrowDown
          size={30}
          className={`transition-transform duration-300 text-gray-600  ${
            showSkill ? "rotate-180" : "rotate-0"
          } `}
        />
      </div>

      <div
        className={`flex transition-transform  duration-500 flex-col ${
          showSkill ? "" : "-translate-y-[100%] h-0 py-0"
        } space-y-3 `}
      >
        {skills.map((item, index) => {
          return (
            <div
              className={` ${
                present == index ? "font-bold text-lime-600" : "font-medium"
              } ease-in-out text-sm cursor-pointer hover:underline underline-offset-4 hover:text-lime-600 decoration-lime-500 text-gray-700 `}
              onClick={() => {
                setPresent(index);
                filterSkill(item.value.toLowerCase());
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillFilter;
