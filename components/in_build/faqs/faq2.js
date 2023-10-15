
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Faq2 = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="py-4">
        <p className="text-xl text-gray-800 font-semibold">
        How can I connect with AI talent on Upwork?
      </p>
      <div   className={`text-gray-500  font-medium transition-all overflow-hidden duration-500 ${
          readMore ? "h-[370px]" : "h-16 "
        } flex flex-col py-4 space-y-2`}>
      <p>Upwork gives you the flexibility you need to find the right talent for your AI projects. Here’s how you can find an expert with the skills you need:</p>
        <ul  className="list-disc list-inside flex flex-col space-y-2">
            <li>Post a job: Find and source independent professionals for your AI projects directly from Upwork’s Talent Marketplace™.</li>
            <li>Book a consultation: Not quite sure where to start or have questions? Book a consultation with an industry expert to get advice.</li>
            <li>Buy a predefined project: Browse through thousands of projects on Project Catalog™, clearly defined and ready to start. Each project already includes pricing, terms, scope, and timing – so you can spend less time working out the details and more time getting to work.</li>
            <li>Hire an agency: Upwork isn’t just for independent contractors; you can also find independent agencies that can help you fill your AI talent gaps with their own professional teams.</li>
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
  )
}

export default Faq2
