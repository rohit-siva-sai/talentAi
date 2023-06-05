import React from "react";
import ClientSub from "./clientSub";
const array = [
  {
    text: "Turing has been a valuable partner in helping us grow our team. We use Turing because it helps us quickly find great talent globally in the ultra-competitive market climate.",
    post: "HR Manager of a multimillion-dollar software solution provider",
    imgUrl:
      "https://d2mk45aasx86xg.cloudfront.net/software_solutions_242940f846.svg",
  },
  {
    text: "Our team had a great experience working with Turing to expand our growing company. Their platform and shortlisting process were extremely helpful and efficient for everyone involved.",
    post: "Tech Lead of a fast-scaling delivery optimization platform",
    imgUrl:
      "https://d2mk45aasx86xg.cloudfront.net/delivery_optimization_675027d1ce.svg",
  },
  {
    text: "We were very pleased to discover in Turing a reliable partner that understood our needs and addressed them with a very professional approach. Turing has helped us fill our open roles in a timely manner while providing talented people that were eager to jump in and help our business progress.",
    post: "HR Manager of a multimillion-dollar embedded payments company",
    imgUrl:
      "https://d2mk45aasx86xg.cloudfront.net/embedded_payments_c13112b086.svg",
  },
];

const Client = () => {
  return (
    <div>
      <div className="bg-gray-100 px-4 py-8 md:px-48">
        <p className="text-gray-800 font-semibold text-3xl">
          What clients say about Turing
        </p>
        <p className="text-gray-700 pt-4 pb-8">
          900+ top comapnies have trusted Turing and the Talent Cloud for the
          engineering needs.
        </p>
        <div className="grid md:grid-cols-3 gap-y-5  gap-x-8">
          {array.map((item) => {
            return (
              <ClientSub
                text={item.text}
                post={item.post}
                imgUrl={item.imgUrl}
              />
            );
          })}
        </div>
        <div className="py-20 flex flex-col space-y-8 items-center">
          <p className="font-semibold ">
            Ready to share your AI business needs?
          </p>
          <div className="flex">
            <input
              type="email"
              name=""
              id=""
              className="outline-none border md:w-72 py-1 placeholder:text-sm text-gray-600 px-3 rounded border-gray-300 placeholder:text-gray-400"
              placeholder="Your work email"
            />
            <div
              className="md:px-5 px-2 text-white md:text-base text-sm bg-blue-500 cursor-pointer rounded
             py-2"
            >
              Talk to an Expert
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
