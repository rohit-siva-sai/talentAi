import BrowseTalent from '@/components/in_build/browseTalent'
import Navbar from '@/components/in_build/navbar'
import Partners from '@/components/in_build/partners'
import Stepbystep from '@/components/in_build/stepbystep'
import WorkGame from '@/components/in_build/workGame'
import Workforce from '@/components/in_build/workforce'
import React from 'react'

const In_build = () => {
  return (
    <div className='min-h-screen'>
      <Navbar/>
      <Workforce/>
      <BrowseTalent/>
      <WorkGame/>
      <Partners/>
      <Stepbystep/>
    </div>
  )
}

export default In_build
