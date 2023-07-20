import React from "react";
const array = [
    {
        name: "facebook",
        imgUrl: "https://interviewing.io/static/images/company-logos/logo-facebook.svg",
    },
    {
        name: "cruise",
        imgUrl: "https://interviewing.io/_next/image?url=%2Fstatic%2Fimages%2Fcompany-logos%2Flogo-cruise.png&w=1920&q=75",
    },
    {
        name: "twitch",
        imgUrl: "https://interviewing.io/static/images/company-logos/logo-twitch.svg",
    },
    {
        name: "asana",
        imgUrl: "https://interviewing.io/static/images/company-logos/logo-asana.svg",
    },
    {
        name: "flexport",
        imgUrl: "https://interviewing.io/static/images/company-logos/logo-flexport.svg",
    },
    {
        name: "yelp",
        imgUrl: "https://interviewing.io/static/images/company-logos/logo-yelp.svg",
    },
    {
        name: "janestreet",
        imgUrl: "https://interviewing.io/_next/image?url=%2Fstatic%2Fimages%2Fcompany-logos%2Flogo-jane-street.png&w=1920&q=75",
    },
    {
        name: "heap",
        imgUrl: "https://interviewing.io/static/images/company-logos/logo-heap.svg",
    },
    {
        name: "quora",
        imgUrl: "https://interviewing.io/static/images/company-logos/logo-quora.svg",
    },
    {
        name: "coinbase",
        imgUrl: "https://interviewing.io/static/images/company-logos/logo-coinbase.svg",
    },
    {
        name: "checkr",
        imgUrl: "https://interviewing.io/static/images/company-logos/logo-checkr.svg",
    },
    {
        name: "zume",
        imgUrl: "https://interviewing.io/_next/image?url=%2Fstatic%2Fimages%2Fcompany-logos%2Flogo-zume.png&w=1920&q=75",
    }
]

const Hired = () => {
  return (
    <div className="md:px-48 px-4">
      <div className="pt-8 pb-12 border">
        <p className="md:text-2xl text-xl font-medium text-center py-10 text-gray-600">Companies who've hired through interviewing.io</p>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-y-2 gap-y-6">
          {array.map((item) => {
            return (
              <picture>
                <img src={item.imgUrl} alt="" />
              </picture>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hired;
