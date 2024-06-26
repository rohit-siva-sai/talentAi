import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(true);
  const router = useRouter();
  useEffect(() => {
    let exempted = ["/via"];
    if (exempted.includes(router.pathname)) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [router]);
  return (
   <div>
    {showFooter && <div className="bg-gray-950 md:px-48  py-12 px-4 ">
      <div className="flex md:flex-row flex-col justify-between md:space-y-0 md:space-x-36  space-y-8 ">
        <Link href={"/"}>
          <div className="text-3xl text-white tracking-wider font-semibold">
            Turing
          </div>
        </Link>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-x-14 md:gap-y-0 gap-y-10 gap-x-4">
          <div className="flex flex-col space-y-2">
            <p className="text-base text-white">For Companies</p>
            <Link href={""}>
              <p className="text-sm text-gray-400">Hire Now</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">Schedule a Call</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">Hiring Guide</p>
            </Link>
            {/* <Link href={""}>
              <p className="text-sm text-gray-400">Our Service Offerings</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">Hire for Specific Skills</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">Customer Reviews</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">How to Hire</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">Interview Q/A</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">Hiring Resources</p>
            </Link> */}
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-base text-white">About Company</p>
            <Link href={""}>
              <p className="text-sm text-gray-400">NewsLetter</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">About us</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">Contact Us</p>
            </Link>
            {/* <Link href={""}>
              <p className="text-sm text-gray-400">Developer Reviews</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">Knowledge Base</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">Resume Guide</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">Jobs for LatAm</p>
            </Link> */}
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-base text-white">Social Media</p>
            <Link href={""}>
              <p className="text-sm text-gray-400">Linkedin</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">twitter</p>
            </Link>
            {/* <Link href={""}>
              <p className="text-sm text-gray-400">About Us</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">Careers</p>
            </Link> */}
          </div>
          {/* <div className="flex flex-col space-y-2">
            <p className="text-base text-white">Contact</p>
            <Link href={""}>
              <p className="text-sm text-gray-400">Contact Us</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">Help Center</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">Developer Support</p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-gray-400">Customer Support</p>
            </Link>
          </div> */}
        </div>
      </div>
    </div>}
   </div>
  );
};

export default Footer;
