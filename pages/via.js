import Benifits from '@/components/via/benifits'
import Currency from '@/components/via/currency'
import Download from '@/components/via/download'
import Footer from '@/components/via/footer'
import GlobalTalent from '@/components/via/globalTalent'
import Growing from '@/components/via/growing'
import HireEmployes from '@/components/via/hireEmployes'
import Hiring from '@/components/via/hiring'
import Navbar from '@/components/via/navbar.js'
import QuickStart from '@/components/via/quickStart'
import React from 'react'

const Via = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <GlobalTalent/>
      <Currency/>
      <HireEmployes/>
      <Benifits/>
      <QuickStart/>
      <Download/>
      <Hiring/>
      <Growing/>
      <Footer/>
    </div>
  )
}

export default Via
