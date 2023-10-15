import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Faq1 = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="pb-4">
      <p className="text-xl text-gray-800 font-semibold">
        What is the first step to hiring AI talent and determining the project
        cost?
      </p>
      <div
        className={`text-gray-500  font-medium transition-all overflow-hidden duration-500 ${
          readMore ? "h-[770px]" : "h-16 "
        } flex flex-col py-4 space-y-2`}
      >
        <p>
          One of the first steps in hiring any talent is to determine what
          skills you need for your project. For example, if you&#39;re
          integrating AI into your applications, you may need engineers or data
          scientists. Or, if you&#39;re interested in using generative AI
          technologies to create content, you&#39;ll want to explore working
          with an AI content editor to check AI outputs.
        </p>
        <p>Examples of talent you&#39;ll find on Upwork include:</p>
        <ul className="list-disc list-inside flex flex-col space-y-2">
          <li>Machine learning engineers</li>
          <li>Data scientists</li>
          <li>Generative AI specialists</li>
          <li>Data annotators</li>
          <li>Prompt engineers</li>
          <li>Chatbot developers</li>
          <li>AI artists</li>
          <li>AI writers</li>
          <li>AI content editors</li>
        </ul>
        <p>
          The cost of your project will depend on your scope of work and the
          specific skills you need. If you choose to post a job to hire talent
          on Upwork, you&#39;ll need to consider the following:
        </p>
        <ul className="list-disc list-inside flex flex-col space-y-2">
          <li>
            Deliverables: What do you need done? Perhaps you need a professional
            to integrate AI into an existing application or annotate data.
          </li>
          <li>
            Skills: Identify the tech and IT talent needed to complete the
            project (e.g., machine learning engineer or ChatGPT developer).
          </li>
          <li>
            Project length: Let talent know whether this is a smaller or larger
            project, and what you expected deadline might be.
          </li>
          <li>
            Budget: Set a budget and note your preference for either an hourly
            rate or a fixed-price contract.
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

export default Faq1;
