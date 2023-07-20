import React, { useEffect, useState } from "react";
import Recruiter from "./recruiter";

const Recruit = () => {
  const [name, setName] = useState(0);
  let id = -1;
 
  return (
    <div className="py-12">
      <div className="md:flex grid grid-cols-2 place-items-center justify-around md:px-48 px-4 py-4">
        <div
          onClick={() => {
            setName(0);
          }}
          className={`${name==0?"opacity-100": "opacity-60"} cursor-pointer`}
        >
          <picture>
            <img
              src="https://interviewing.io/static/images/company-logos/logo-dropbox.svg"
              alt=""
            />
          </picture>
        </div>
        <div
          onClick={() => {
            setName(1);
          }}
          className={`${name==1?"opacity-100": "opacity-60"} cursor-pointer`}
        >
          <picture>
            <img
              src="https://interviewing.io/static/images/company-logos/logo-twitch.svg"
              alt=""
            />
          </picture>
        </div>
        <div
          onClick={() => {
            setName(2);
          }}
          className={`${name==2?"opacity-100": "opacity-60"} cursor-pointer`}
        >
          <picture>
            <img
              src="https://interviewing.io/_next/image?url=%2Fstatic%2Fimages%2Fcompany-logos%2Flogo-mattermark--dark.png&w=1920&q=75"
              alt=""
            />
          </picture>
        </div>
        <div
          onClick={() => {
            setName(3);
          }}
          className={`${name==3?"opacity-100": "opacity-60"} cursor-pointer`}
        >
          <picture>
            <img
              src="https://interviewing.io/static/images/company-logos/logo-uber.svg"
              alt=""
            />
          </picture>
        </div>
        <div
          onClick={() => {
            setName(4);
          }}
          className={`${name==4?"opacity-100": "opacity-60"} cursor-pointer col-span-2 justify-self-center`}
        >
          <picture>
            <img
              src="https://interviewing.io/static/images/company-logos/logo-evernote--dark.svg"
              alt=""
            />
          </picture>
        </div>
      </div>
      <div className="bg-black md:px-48  px-4">
        <div className={`${name == 0 ? "block" : "hidden"}`}>
          <Recruiter
            matter={
              "“[interviewing.io's] candidates converted at 2-3X the rate currently seen in the tech market! The opportunity to diversify our pipeline of candidates, combined with the confidence in the up front assessment made a partnership with interviewing.io a no-brainer.”"
            }
            name={"Cameron Martin"}
            post="Head of Recruiting Pipeline Channels, Dropbox"
            imgUrl={
              "https://interviewing.io/_next/image?url=%2Fstatic%2Fimages%2Ftestimonials-headshot-dropbox.png&w=1920&q=75"
            }
          />
        </div>
        <div className={`${name == 1 ? "block" : "hidden"}`}>
          <Recruiter
            matter={
              "“We have staffed multiple teams using interviewing.io. It is a great company which can not only give you high quality candidates but can also help remove resume bias.”"
            }
            name={"Chris Lyon"}
            post="Technical Recruiting Manager, Twitch"
            imgUrl={
              "https://interviewing.io/_next/image?url=%2Fstatic%2Fimages%2Ftestimonials-headshot-twitch.png&w=1920&q=75"
            }
          />
        </div>

        <div className={`${name == 2 ? "block" : "hidden"}`}>
          <Recruiter
            matter={
              "“[interviewing.io's] candidates converted at 2-3X the rate currently seen in the tech market! The opportunity to diversify our pipeline of candidates, combined with the confidence in the up front assessment made a partnership with interviewing.io a no-brainer.”"
            }
            name={"Cameron Martin"}
            post="Head of Recruiting Pipeline Channels, Dropbox"
            imgUrl={
              "https://interviewing.io/_next/image?url=%2Fstatic%2Fimages%2Ftestimonials-headshot-dropbox.png&w=1920&q=75"
            }
          />
        </div>
        <div className={`${name == 3 ? "block" : "hidden"}`}>
          <Recruiter
            matter={
              "“I love that the platform takes a data-driven approach. I've used it to hire motivated and talented engineers. The team has been an amazing partner.”"
            }
            name={"Tasneem Minadakis"}
            post="Engineering Leader, Uber"
            imgUrl={
              "https://interviewing.io/_next/image?url=%2Fstatic%2Fimages%2Ftestimonials-headshot-uber.png&w=1920&q=75"
            }
          />
        </div>
        <div className={`${name == 4 ? "block" : "hidden"}`}>
          <Recruiter
            matter={
              "“The calibration of interviewing.io candidates to our needs is unparalleled to any tool that I have worked with. I cannot recommend them higher!”"
            }
            name={"Kelly Grossart"}
            post="Lead Recruiter, Evernote"
            imgUrl={
              "https://interviewing.io/_next/image?url=%2Fstatic%2Fimages%2Ftestimonials-headshot-evernote.png&w=1920&q=75"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Recruit;
