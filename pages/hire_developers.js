import Business from '@/components/staffing/business'
import Engineers from '@/components/staffing/engineers'
import Footer from '@/components/staffing/footer'
import HireML from '@/components/staffing/hireML'
import React from 'react'

const Hire_developers = () => {
  return (
    <div>
      <HireML/>
      <Engineers/>
      <Business/>
      <Footer/>
    </div>
  )
}

export default Hire_developers

