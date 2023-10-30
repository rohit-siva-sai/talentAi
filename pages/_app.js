import Footer from "@/components/in_build/footer";
import Navbar from "@/components/in_build/navbar";
// import Navbar from "@/components/home/navbar";
import "@/styles/globals.css";
import { profileFilter } from "@/useStore/filterProfile";
import SEO from "@bradgarropy/next-seo";
import { createClient } from "@sanity/client";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";


export default function App({ Component, pageProps }) {
  const [navShow, setNavShow] = useState(true);
  const router = useRouter();
  useEffect(() => {
    let exempted = ["/in_build"];
    if (exempted.includes(router.pathname)) {
      setNavShow(false);
    } else {
      setNavShow(true);
    }
  }, [router]);
  const [profiles, updateProfiles, updateAllProfiles] = profileFilter(
    (store) => [store.profiles, store.updateProfiles, store.updateAllProfiles]
  );
  
  

  return (
    <>
      <SEO
        title="Turing"
        description="helping comapnies with ai"
        keywords={["aihlp", ""]}
        icon="/icon2.webp"
      />

      {navShow && <Navbar />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
