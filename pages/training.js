import Services from "@/components/home/services";
import Footer from "@/components/hire_developers/footer";
import Guide from "@/components/hire_developers/guide";
import Remote from "@/components/hire_developers/remote";
import Expert from "@/components/training/expert";
import Offerings from "@/components/training/offerings";
import Solution from "@/components/training/solution";
import React from "react";
import SEO from "@bradgarropy/next-seo";
import Education from "@/models/Education";
import mongoose from "mongoose";
import Developer from "@/models/Developer";
import Identity from "@/models/Identity";
import Skills from "@/models/Skill";

const Training = ({}) => {
  // console.log('sss',products);
  
  return (
    <div>
      <SEO
        title="Talent training programs"
        description="helping comapnies with ai"
        keywords={["aihlp", ""]}
       
      />
      <Services />
      {/* {products.map((item)=>{
          return (
            <div className="p-4 text-lg font-semibold text-slate-500">{item.email}</div>
          )
      })} */}
      <Solution />
      <Offerings />
      <Expert />
      <Remote />
    </div>
  );
};


// export async function getServerSideProps(context) {
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI);
//   }

//   let products = await Developer.find()
//   // let hoods = {};
//   // for (let item of products) {
//   //   if (item.title in hoods) {
//   //     if (
//   //       !hoods[item.title].color.includes(item.color) &&
//   //       item.availableQty > 0
//   //     ) {
//   //       hoods[item.title].color.push(item.color);
//   //     }
//   //     if (
//   //       !hoods[item.title].size.includes(item.size) &&
//   //       item.availableQty > 0
//   //     ) {
//   //       hoods[item.title].size.push(item.size);
//   //     }
//   //   } else {
//   //     hoods[item.title] = JSON.parse(JSON.stringify(item));
//   //     if (item.availableQty > 0) {
//   //       hoods[item.title].color = [item.color];
//   //       hoods[item.title].size = [item.size];
//   //     }
//   //   }
//   // }

//   //  res.status(200).json({ products })
//   return {
//     props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
//   };
// }


export default Training;
