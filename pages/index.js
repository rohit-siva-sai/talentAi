import Image from "next/image";
import { Inter } from "next/font/google";
import Services from "@/components/home/services";
import Company from "@/components/home/company";
import Aiaccelerator from "@/components/home/aiaccelerator";
import Advisory from "@/components/home/advisory";
import Client from "@/components/home/client";
import Head from "next/head";
import SEO from "@bradgarropy/next-seo";
import Navbar from "@/components/in_build/navbar";
import Workforce from "@/components/in_build/workforce";
import BrowseTalent from "@/components/in_build/browseTalent";
import WorkGame from "@/components/in_build/workGame";
import Partners from "@/components/in_build/partners";
import Stepbystep from "@/components/in_build/stepbystep";
import Faqs from "@/components/in_build/faqs";
import HowItWorks from "@/components/in_build/howItWorks";
import Colleagues from "@/components/in_build/colleagues";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen">
      
      <Workforce />
      <Colleagues/>
      <BrowseTalent />
      <WorkGame />
      <HowItWorks/>
      <Partners />
      <Stepbystep />
      <Faqs/>
    </div>
    // <main
    //   className={``}
    // >
    //   <Services/>
    //   <Company/>
    //   <Aiaccelerator/>
    //   <Advisory/>
    //   <Client/>

    // </main>
  );
}
