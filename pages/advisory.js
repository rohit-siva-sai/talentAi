import React from "react";
import Services from "@/components/home/services";
import Footer from "@/components/hire_developers/footer";
import Guide from "@/components/hire_developers/guide";
import Remote from "@/components/hire_developers/remote";
import Expert from "@/components/training/expert";
import Offerings from "@/components/training/offerings";
import Solution from "@/components/training/solution";
import SEO from "@bradgarropy/next-seo";

const Advisory = () => {
  return (
    <div>
       <SEO
        title="advisory services"
        description="helping comapnies with ai"
        keywords={["aihlp",""]}
       
       
      />
      <Services />
      <Solution />
      <Offerings />
      <Expert />
      <Remote />
    
    </div>
  );
};

export default Advisory;
