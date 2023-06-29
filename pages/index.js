import Image from 'next/image'
import { Inter } from 'next/font/google'
import Services from '@/components/home/services'
import Company from '@/components/home/company'
import Aiaccelerator from '@/components/home/aiaccelerator'
import Advisory from '@/components/home/advisory'
import Client from '@/components/home/client'
import Head from 'next/head'
import SEO from '@bradgarropy/next-seo'

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
