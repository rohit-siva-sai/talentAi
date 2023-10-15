
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Faq3 = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="py-4">
      <p className="text-xl text-gray-800 font-semibold">
        Why should I use Upwork to hire talent for AI services?
      </p>
      <div  className={`text-gray-500  font-medium transition-all overflow-hidden duration-500 ${
          readMore ? "h-[570px]" : "h-16 "
        } flex flex-col py-4 space-y-2`}>
        <p>
          When it comes to AI, you may need a multidisciplinary team to handle
          your project. You might need professionals like:
        </p>
        <ul className="list-disc list-inside flex flex-col space-y-2">
          <li>Software engineers to integrate AI technologies</li>
          <li>Prompt engineers skilled at getting high-quality AI outputs</li>
          <li>Data scientists to curate and analyze data sets</li>
          <li>Data annotation specialists to label data for model training</li>
          <li>Writers to edit and quality check AI-generated content</li>
        </ul>
        <p>
          Upwork is the leading online talent solution for companies looking to
          scale their teams and get work done. Here are some key advantages for
          businesses looking to find talent on Upwork:
        </p>
        <ul className="list-disc list-inside flex flex-col space-y-2">
          <li>
            On-demand talent: Access to a global talent pool of independent
            professionals and agencies.
          </li>
          <li>
            Transparency: Simplified vetting thanks to freelancer reviews, work
            history, testimonials, and portfolios.
          </li>
          <li>
            Technology: AI-assisted talent matching to help you find the right
            talent for your needs.
          </li>
          <li>
            Flexibility: Hire individuals or agencies to complete any size
            project.
          </li>
          <li>
            Simplicity: Hire, pay, and collaborate with remote teams all in one
            place.
          </li>
        </ul>
      </div>
      <div
        onClick={() => {
          setReadMore(!readMore);
        }}
        className=" z-10 flex cursor-pointer py-1 space-x-1 items-center"
      >
        <p className="text-lime-600 font-medium"> {readMore ? "Read Less" : "Read More"}</p>
        {!readMore ? <MdKeyboardArrowDown  className="text-lime-600" size={20} />: <MdKeyboardArrowUp className="text-lime-600" size={20} /> }
      </div>
    </div>
  );
};

export default Faq3;
