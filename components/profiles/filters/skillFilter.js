import { profileFilter } from "@/useStore/filterProfile";
import { Checkbox } from "antd";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const skills = [
  {
    label: "Analytical Skills",
    value: "Analytical Skills",
    checked: false,
  },
  {
    label: "Data Visualization",
    value: "Data Visualization",
    checked: false,
  },
  {
    label: "Python",
    value: "Python",
    checked: false,
  },
  {
    label: "Data Warehousing",
    value: "Data Warehousing",
    checked: false,
  },
  {
    label: "C++",
    value: "C++",
    checked: false,
  },
  {
    label: "Deep Learning",
    value: "Deep Learning",
    checked: false,
  },
  {
    label: "SQL",
    value: "SQL",
    checked: false,
  },
];

const SkillFilter = ({ filterDeveloper }) => {
  const [showSkill, setShowSkill] = useState(false);
  const [present, setPresent] = useState(0);

  const [allSkills, setAllSkills] = useState(skills);

  const [allProfiles, filterBySkill, updateProfiles] = profileFilter(
    (store) => [store.allProfiles, store.filterBySkill, store.updateProfiles]
  );

  // console.log("all", allProfiles);

  const [appliedSkills, setAppliedSkills] = useState();

  const [filteredProfiles, setFilteredProfiles] = useState(allProfiles);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const filterSearch = (value) => {
    let tempProducts = allProfiles;
    if (value.length > 2) {
      // list = allProfiles.filter((curElement) => {
      //   return (
      //     curElement.username
      //       .toLowerCase()
      //       .search(value.toLowerCase().trim()) !== -1 ||
      //     curElement.skills.map((user) => {
      //       user.skill.map((item) => {
      //         console.log("item", item);

      //         item.toLowerCase().search(value.toLowerCase().trim()) !== -1;
      //       });
      //     })

      //     // curElement.title.toLowerCase().includes(value) ||
      //     // curElement.category.toLowerCase().includes(value)
      //   );
      // });

      // console.log("temp", tempProducts);


      const list = allProfiles.filter((item) => {
        let z = [];
        item.skills.map((user) => {
          z = z.concat(user.skill);
        });
        
        // console.log('z',z);

        const l = z.some((s) => {
          // let k = value.toLowerCase() == (s.toLowerCase()) ? true : false
          let k = s.toLowerCase().search(value.toLowerCase().trim()) != -1
          // console.log('sss',s,item.username,k);

          return k;
        });
        // console.log("sss", l);

        return l;

        // const n = l.includes(true) ? true : false;
        // console.log("n", n);

        // return n
      });
      // console.log("update", list);

      updateProfiles(list);



      // updateProfiles(list);
    } else {
      updateProfiles(allProfiles);
    }
  };

  const filterSkill = (value) => {
    let updatedList = allProfiles;
    const skillList = allSkills;
    const skillChecked = skillList.map((item) =>
      item.value === value ? { ...item, checked: !item.checked } : item
    );
    setAllSkills(skillChecked);
    // console.log("skillsss", skillChecked);

    const skillsChecked = skillChecked
      .filter((item) => item.checked)
      .map((item) => item.value.toLowerCase());

    // console.log("skill", skillsChecked);
    // let all = []

    // const data = allProfiles.map((item) => {
    //   item.skills.map((user) =>
    //     all.push({skill: user.skill,name: item.username})
    //   );
    // });

    // console.log('all',all);

    // const list = allProfiles.filter((item) => {

    //   const ss = all.map((user)=>{
    //       const sss = user.skill.map((s)=>{
    //              const name = skillsChecked.includes(s.toLowerCase()) ? user.name : null
    //              return name
    //        })
    //       return sss

    //   })
    //   console.log('zxx',ss);

    //   const y = ss.filter((car)=>{
    //          car.includes(item.username)
    //   })
    // console.log('y',y);

    // item.skills.map((user) =>
    //   all.push({skill: user.skill,name: item.username})
    // );
    // });

    if (skillsChecked.length >= 1) {
      const list = allProfiles.filter((item) => {
        let z = [];
        item.skills.map((user) => {
          z = z.concat(user.skill);
        });
        // let y = [];
        // z.map((q) => {
        //   y = y.concat(q);
        // });
        // console.log('z',z);

        const l = z.some((s) => {
          let k = skillsChecked.includes(s.toLowerCase());
          // console.log('sss',s,item.username,k);

          return k;
        });
        // console.log("sss", l);

        return l;

        // const n = l.includes(true) ? true : false;
        // console.log("n", n);

        // return n
      });
      // console.log("update", list);

      updateProfiles(list);
    } else {
      updateProfiles(allProfiles);
    }

    // const data = allProfiles.filter((item) =>
    //   {const cool = item.skills.map(
    //     (user) =>
    //      { // user.skill.includes(skillsChecked.map((item)=>{ return item}))
    //      const fire =  user.skill.map((single) => {
    //         return skillsChecked.includes(single.toLowerCase());
    //         // console.log("riohift", single);
    //       })
    //       console.log('fire',fire);

    //       return fire
    //    }
    //   )
    //  console.log('cool',cool);

    //   return cool.includes(true)
    // }
    // );

    // updatedList = updatedList.filter((item) =>
    //   item.skills[0].skill.includes(skillsChecked)
    // );
  };

  //   console.log('allprofiles',allProfiles);

  // const filterSkill = (role) => {
  //   console.log("role", role);

  //   if (role == "all skills") {
  //     // upd(profiles);
  //     updateProfiles(allProfiles);
  //     return;
  //   }

  //   const data = allProfiles.filter((profile) => {
  //     // Check if the profile has at least one selected skill
  //     return profile.skills.some((user) =>
  //       user.skill.map((word) => word.toLowerCase()).includes(role)
  //     );
  //   });

  //   // const data = allProfiles.filter((item) =>  item.skills.filter((user)=> user.skill.includes(role))  );
  //   const value = "html/css";
  //   console.log("datasdd", value.includes("html"));

  //   updateProfiles(data);
  //   // setFilterDeveloperData(data);
  // };

  return (
    <div
      className={`flex border-y ${
        showSkill ? "pb-4" : "pb-0"
      } bg-white overflow-hidden transition-transform duration-500 flex-col space-y-2 `}
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
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="serach by skill"
            onChange={(e) => {
              filterSearch(e.target.value);
            }}
            className="outline-none border mb-2 border-gray-300 rounded-md py-1 px-2 text-sm text-gray-600 focus:border-lime-600  "
          />
        </div>
        <div
          className={` 
             font-medium
           ease-in-out text-base pl-6 cursor-pointer hover:underline underline-offset-4 hover:text-lime-600 decoration-lime-500 text-gray-700 `}
          // onClick={() => {
          //   setPresent(index);
          //   filterSkill(item.value.toLowerCase());
          // }}
          onClick={() => {
            updateProfiles(allProfiles);
            const f = allSkills.map((item) =>
              item.checked ? { ...item, checked: !item.checked } : item
            );
            setAllSkills(f);
            // console.log("f", f);
          }}
        >
          clear filters
        </div>

        {allSkills.map((item, index) => {
          return (
            <div
              className="flex items-center space-x-2"
              onClick={() => {
                // const h = allSkills.map((d)=>{
                //    item.value == d.value ? {...d,checked: !d.checked} : d
                // })
                // setAllSkills(h)
                filterSkill(item.value);
              }}
            >
              <Checkbox checked={item.checked} />
              <div
                className={` ${
                  item.checked ? "font-bold text-lime-600" : "font-medium"
                } ease-in-out text-sm cursor-pointer hover:underline underline-offset-4 hover:text-lime-600 decoration-lime-500 text-gray-700 `}
                // onClick={() => {
                //   setPresent(index);
                //   filterSkill(item.value.toLowerCase());
                // }}
              >
                {item.label}
              </div>
            </div>
          );
        })}
         
      </div>
    </div>
  );
};

export default SkillFilter;
