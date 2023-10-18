import React from 'react'
import CategoryFilter from './categoryFilter'
import SkillFilter from './skillFilter'

const ApplyFilter = ({filterDeveloper}) => {
  return (
    <div className="col-span-3  md:sticky   md:top-28  md:px-2">
    <p className="font-semibold text-gray-600 text-lg mb-4">Filter By</p>
    <div className="flex flex-col space-y-2">
   <CategoryFilter filterDeveloper={filterDeveloper} />
    <SkillFilter filterDeveloper={filterDeveloper}  />
    </div>
  </div>
  )
}

export default ApplyFilter
