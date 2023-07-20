import Link from "next/link";
import React from "react";
const array = [
  {
    url: "",
    imgUrl:
      "https://interviewing.io/static/images/employers/press/press--business-insider.svg",
  },
  {
    url: "",
    imgUrl:
      "https://interviewing.io/static/images/employers/press/press--bloomberg.svg",
  },
  {
    url: "",
    imgUrl:
      "https://interviewing.io/static/images/employers/press/press--npr.svg",
  },
  {
    url: "",
    imgUrl:
      "https://interviewing.io/static/images/employers/press/press--techcrunch.svg",
  },
  {
    url: "",
    imgUrl:
      "https://interviewing.io/static/images/employers/press/press--wsj.svg",
  },
  {
    url: "",
    imgUrl:
      "https://interviewing.io/static/images/employers/press/press--the-new-yorker.svg",
  },
  {
    url: "",
    imgUrl:
      "https://interviewing.io/static/images/employers/press/press--the-guardian.svg",
  },
  {
    url: "",
    imgUrl:
      "https://interviewing.io/static/images/employers/press/press--forbes.svg",
  },
  {
    url: "",
    imgUrl:
      "https://interviewing.io/static/images/employers/press/press--vox.svg",
  },
  {
    url: "",
    imgUrl:
      "https://interviewing.io/static/images/employers/press/press--nyt.svg",
  },
  {
    url: "",
    imgUrl:
      "https://interviewing.io/static/images/employers/press/press--washington-post.svg",
  },
  {
    url: "",
    imgUrl:
      "https://interviewing.io/static/images/employers/press/press--the-atlantic.svg",
  },
  {
    url: "",
    imgUrl:
      "https://interviewing.io/static/images/employers/press/press--quartz.svg",
  },
  {
    url: "",
    imgUrl:
      "https://interviewing.io/_next/image?url=%2Fstatic%2Fimages%2Femployers%2Fpress%2Fpress--the-daily-show.jpg&w=1920&q=75",
  },
  {
    url: "",
    imgUrl:
      "https://interviewing.io/static/images/employers/press/press--fast-company.svg",
  },
  {
    url: "",
    imgUrl:
      "https://interviewing.io/static/images/employers/press/press--inc.svg",
  },
];

const Press = () => {
  return (
    <div className="md:px-48 px-4">
      <div className="pt-0 md:pt-8 pb-12 ">
        <p className="text-lg font-medium text-center py-10 text-gray-600">
          WOW, PRESS.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-4 md:gap-x-0 gap-x-10 gap-y-12 md:px-24 place-items-center md:gap-y-8">
          {array.map((item) => {
            return (
              <Link href={""}>
                <picture>
                  <img src={item.imgUrl} alt="" className="opacity-50    hover:opacity-100 w-28" />
                </picture>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Press;
