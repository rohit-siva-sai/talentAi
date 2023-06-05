import Services from "@/components/home/services";
import Footer from "@/components/staffing/footer";
import Guide from "@/components/staffing/guide";
import Remote from "@/components/staffing/remote";
import Expert from "@/components/training/expert";
import Offerings from "@/components/training/offerings";
import Solution from "@/components/training/solution";
import React from "react";

const Training = () => {
  return (
    <div>
      <Services />
      <Solution />
      <Offerings />
      <Expert/>
      <Remote/>
      <Footer/>
      
    </div>
  );
};

export default Training;
