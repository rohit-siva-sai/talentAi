import Link from "next/link";
import React from "react";
import { RiUserSettingsLine } from "react-icons/ri";
const array = [
  {
    imgUrl:
      "https://assets-global.website-files.com/603fea6471d9d8559d077603/62ebd6ad0e99ef7bffceb84c_client.svg",
    head: "Account Manager",
    matter:
      "Maintains your account and works with your team to maximize the return on your Upwork investment.",
  },
  {
    imgUrl:
      "https://assets-global.website-files.com/603fea6471d9d8559d077603/62ebd6aea2b05a14e0442413_expertise.svg",
    head: "Solutions Architect",
    matter:
      "Develops custom talent solutions for your organization and unique strategic goals.",
  },
  {
    imgUrl:
      "https://assets-global.website-files.com/603fea6471d9d8559d077603/62ebd6ae7ba900a0f14512d0_rating.svg",
    head: "Program Success Managers",
    matter:
      "Keeps your team up to date on how to use Upwork and any changes to your account.",
  },
  {
    imgUrl:
      "https://assets-global.website-files.com/603fea6471d9d8559d077603/62ebd6ad861f6f4f4fdab528_freelancer.svg",
    head: "Upwork Professional",
    matter:
      "Supports your team through the hiring process, from screening talent to starting projects.",
  },
];

const Stepbystep = () => {
  return (
    <div className="md:px-48 px-4 pt-6 pb-10 bg-gray-50">
      <div>
        <p className="font-semibold text-2xl  md:text-3xl  text-gray-800">
          We&#39;ll show you how, step by step
        </p>
        <p className="text-gray-500 mt-3">
          Enterprise clients benifits from dedicated support with top talent and
          a robust platform
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16 ">
          {array.map((item) => {
            return (
              <div className="bg-white py-4 px-4 rounded-md flex flex-col space-y-1">
                <picture>
                  <img src={item.imgUrl} alt="" />
                </picture>
                <p className="font-semibold">{item.head}</p>
                <p className="text-sm text-gray-500 ">{item.matter}</p>
              </div>
            );
          })}
        </div>
        <Link href={""}>
          <div
            className="px-8 md:px-10 cursor-pointer mt-6 mx-auto md:mx-0 w-fit text-white  bg-lime-600 rounded-md
            py-2 text-sm hover:opacity-90"
          >
            Let&#39;s talk
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Stepbystep;
