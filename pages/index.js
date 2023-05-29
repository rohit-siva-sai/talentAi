import Image from 'next/image'
import { Inter } from 'next/font/google'
import Services from '@/components/services'
import Company from '@/components/company'
import Aiaccelerator from '@/components/aiaccelerator'
import Advisory from '@/components/advisory'
import Client from '@/components/client'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={``}
    >
      <Services/>
      <Company/>
      <Aiaccelerator/>
      <Advisory/>
      <Client/>
     
    </main>
  )
}
