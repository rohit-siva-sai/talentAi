import React from 'react'

const Recruiter = ({matter,name,post,imgUrl}) => {
  return (
    <div className='py-10'>
      <p className='text-gray-300 text-xl md:text-2xl '>{matter}</p>
      <div className='flex items-center justify-end space-x-4 pt-4'>
        <div className='text-gray-300' >
            <p className='text-end'>{name}</p>
            <p className='text-end'>{post}</p>
        </div>
        <picture>
            <img src={imgUrl} alt="" className='rounded-full w-12' />
        </picture>
      </div>
    </div>
  )
}

export default Recruiter
