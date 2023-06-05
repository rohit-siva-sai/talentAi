import React from "react";
import SolutionSub from "./solutionSub";
const array = [
  {
    imgUrl:
      "https://www.turing.com/_next/image?url=https%3A%2F%2Fd2mk45aasx86xg.cloudfront.net%2FAI_marketplace_ee915ce634.jpg&w=1920&q=75",
    head: "An AI marketplace for supply chain optimization and excellence",
    text: "Learn how Turing AI Services helped a Fortune 100 client leverage the power of AI to detect unusual supply chain patterns, automate their customer service experience, and support the detection and prevention of diseases.",
    link: "",
  },
  {
    imgUrl:
      "https://d2mk45aasx86xg.cloudfront.net/Image_Container_c1dc91e89f.svg",
    head: "An AI pricing algorithm for high-tech B2B & B2C products",
    text: "Learn how Turing AI Services brought clarity to a Fortune 100 client’s consumer strategy by taking historical pricing data, market demand, and competitor information to build a pricing recommendation solution that increased sales. ",
    link: "",
  },
  {
    imgUrl:
      "https://d2mk45aasx86xg.cloudfront.net/Image_Container1_8b84c7884c.svg",
    head: "High-quality, advanced programs to train AI models at scale",
    text: "Learn how Turing AI Services provided operational clarity, increased efficiency, and scalability for a client looking for powerful interactive chatbots and coding models to identify and correct bugs in code.",
    link: "",
  },
];

const Solution = () => {
  return (
    <div className="md:px-48 px-4 py-12">
      <div className="pb-12">
        <p className="text-gray-800 font-semibold text-2xl md:text-3xl">
          Turing creates business solutions with AI & ML
        </p>
        <p className="text-gray-600 text-base pt-6">
          We use our AI experience to help clients convert their data into
          business value across various industries—deploying AI technologies
          around NLP, computer vision, and text processing. Our clients have
          realized significant value in their supply chain management (SCM),
          pricing, product bundling and development, and personalization and
          recommendations capabilities among many others.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-3 md:gap-x-12 md:gap-y-0 gap-y-6 ">
        {array.map((item) => {
          return (
            <SolutionSub
              imgUrl={item.imgUrl}
              head={item.head}
              text={item.text}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Solution;
