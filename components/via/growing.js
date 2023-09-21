import Link from 'next/link'
import React from 'react'



const Growing = () => {
  const  formatValue = value => `$ ${Number(value).toFixed(2)}`
  return (
    <div className='flex mt-1 px-4 md:px-0 flex-col items-center space-y-12 py-36 bg-blue-600'>
      <p className='text-white text-3xl md:text-4xl text-center font-semibold md:w-3/5 '>Deel makes growing remote and international teams effortless. Ready to get started?</p>
      <Link href={""}>
          <div
            className="px-8 font-light border-2 hover:-translate-y-1 duration-300 hover:bg-white transition-all hover:text-blue-500  cursor-pointer w-fit text-white  hover:opacity-90 bg-transparent rounded-full
             py-3 text-base"
          >
            Request a Demo
          </div>
        </Link>
       <div className='md:flex grid grid-cols-2 gap-y-12 gap-x-6  md:space-x-20  items-center'>
        <div className='flex flex-col space-y-2'>
            <p className='text-white text-3xl font-bold '>150 +</p>
            <p className='text-white font-extralight '>Countries</p>
        </div>
        <div className='flex flex-col space-y-2'>
            <p className='text-white text-3xl font-bold '>15,000 +</p>
            <p className='text-white font-extralight '>Customers</p>
        </div>
        <div className='flex flex-col space-y-2'>
            <p className='text-white text-3xl font-bold '>200 +</p>
            <p className='text-white font-extralight '>Legal experts</p>
        </div>
        <div className='flex flex-col space-y-2'>
            <p className='text-white text-3xl font-bold '>120 +</p>
            <p className='text-white font-extralight '>Currencies</p>
        </div>
       </div>
        
    </div>
  )
}

export default Growing
