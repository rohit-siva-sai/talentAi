import Business from '@/components/staffing/business'
import Engineers from '@/components/staffing/engineers'
import Footer from '@/components/staffing/footer'
import HireML from '@/components/staffing/hireML'
import Remote from '@/components/staffing/remote'
import React from 'react'

const Hire_developers = () => {
  return (
    <div className='overflow-hidden'>
      <HireML/>
      <Engineers/>
      <Business/>
      <Remote/>
      <Footer/>
    </div>
  )
}

export default Hire_developers

