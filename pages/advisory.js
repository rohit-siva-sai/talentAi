import React from "react";
import Services from "@/components/home/services";
import Footer from "@/components/hire_developers/footer";
import Guide from "@/components/hire_developers/guide";
import Remote from "@/components/hire_developers/remote";
import Expert from "@/components/training/expert";
import Offerings from "@/components/training/offerings";
import Solution from "@/components/training/solution";

const Advisory = () => {
  return (
    <div>
      <Services />
      <Solution />
      <Offerings />
      <Expert />
      <Remote />
    
    </div>
  );
};

export default Advisory;
