import Business from '@/components/hire_developers/business'
import Engineers from '@/components/hire_developers/engineers'
import Footer from '@/components/hire_developers/footer'
import HireML from '@/components/hire_developers/hireML'
import Remote from '@/components/hire_developers/remote'
import React from 'react'

const Hire_developers = () => {
  return (
    <div className='overflow-hidden'>
      <HireML/>
      <Engineers/>
      <Business/>
      <Remote/>
     
    </div>
  )
}

export default Hire_developers

