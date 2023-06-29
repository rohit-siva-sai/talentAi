import Business from "@/components/hire_developers/business";
import Engineers from "@/components/hire_developers/engineers";
import Footer from "@/components/hire_developers/footer";
import HireML from "@/components/hire_developers/hireML";
import Remote from "@/components/hire_developers/remote";
import React from "react";
import SEO from "@bradgarropy/next-seo";

const Hire_developers = () => {
  return (
    <div className="overflow-hidden">
      <SEO
        title="hiring developers"
        description="hiring ML developers by their profile"
        keywords={["aihlp", ""]}
        icon="/icon2.webp"
        // twitter={{ card: "sdhgvds", site: "sdhcg", image: "/vercel.svg" }}
      />
      <HireML />
      <Engineers />
      <Business />
      <Remote />
    </div>
  );
};

export default Hire_developers;
