import Link from 'next/link';
import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';

const ProjectHistory = ({projectHistory}) => {
    // console.log(projectHistory);
    const [collapse, setCollapse] = useState(false);
  return (
    <div className="flex flex-col  border-2 md:px-4 px-2 py-2 md:py-4 rounded-lg">
      <div
          onClick={() => {
            setCollapse(!collapse);
          }}
          className="cursor-pointer  font-semibold text-gray-800 flex justify-between items-center"
        >
          <p >Project History</p>
          <MdKeyboardArrowDown
            size={30}
            className={` ${
              collapse ? "rotate-180" : "rotate-0"
            } transition-all duration-500 `}
          />
        </div>
        {collapse && <div className='px-4 overflow-x-hidden md:px-8 mt-8 mb-8 flex flex-col space-y-8'>
            {projectHistory.map((item)=>{
                return (
                    <div className='flex flex-col space-y-4'>
                       <div>
                       <p className='font-bold text-gray-800'>{item.projectName}</p>
                        {item.projectLink && <Link href={item.projectLink}>

                            <p className='text-blue-500 text-sm underline hover:opacity-80'>{item.projectLink}</p>
                        </Link>}
                       </div>
                        <ul className='list-disc  font-medium text-gray-600  flex flex-col space-y-2'>
                        {item.aboutProject.map((point)=>{
                            return (
                                <li >{point}</li>
                            )
                        })}
                        </ul>
                    </div>
                )
            })}
        </div>}
    </div>
  )
}

export default ProjectHistory
