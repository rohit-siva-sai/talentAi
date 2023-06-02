import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-950 py-12 ">
      <div className="flex justify-center space-x-28 " >
        <div className="text-3xl text-white font-semibold" >Turing</div>
        <div className="flex flex-col space-y-2">
          <p className="text-base text-white">Companies</p>
          <p className="text-sm text-gray-400">Hire Developers</p>
          <p className="text-sm text-gray-400">Book a call</p>
          <p className="text-sm text-gray-400">Explore Services</p>
          <p className="text-sm text-gray-400">Our Service Offerings</p>
          <p className="text-sm text-gray-400">Hire for Specific Skills</p>
          <p className="text-sm text-gray-400">Customer Reviews</p>
          <p className="text-sm text-gray-400">How to Hire</p>
          <p className="text-sm text-gray-400">Interview Q/A</p>
          <p className="text-sm text-gray-400">Hiring Resources</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-base text-white">Developers</p>
          <p className="text-sm text-gray-400">Apply for Jobs</p>
          <p className="text-sm text-gray-400">Developer Login</p>
          <p className="text-sm text-gray-400">Remote Developer Jobs</p>
          <p className="text-sm text-gray-400">Developer Reviews</p>
          <p className="text-sm text-gray-400">Knowledge Base</p>
          <p className="text-sm text-gray-400">Resume Guide</p>
          <p className="text-sm text-gray-400">Jobs for LatAm</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-base text-white">Company</p>
          <p className="text-sm text-gray-400">Blog</p>
          <p className="text-sm text-gray-400">Press</p>
          <p className="text-sm text-gray-400">About Us</p>
          <p className="text-sm text-gray-400">Careers</p>
          
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-base text-white">Contact</p>
          <p className="text-sm text-gray-400">Contact Us</p>
          <p className="text-sm text-gray-400">Help Center</p>
          <p className="text-sm text-gray-400">Developer Support</p>
          <p className="text-sm text-gray-400">Customer Support</p>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
