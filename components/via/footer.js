import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineInstagram } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { RiFacebookFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#15357a] md:px-48 py-24 flex flex-col md:flex-row px-4 space-y-12 md:space-y-0 justify-between">
      <div className="flex flex-col space-y-8">
        <Image
          src={
            "https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/deel%20logo.svg"
          }
          width={70}
          height={70}
        />
        <div className="flex space-x-6 items-center">
          <Link href={""}>
            <RiTwitterXFill
              className="text-white bg-blue-600 rounded-full w-10 h-10 p-2"
              size={20}
            />
          </Link>
          <Link href={""}>
            <RiLinkedinFill
              className="text-white bg-blue-600 rounded-full w-10 h-10 p-2"
              size={20}
            />
          </Link>
          <Link href={""}>
            <RiFacebookFill
              className="text-white bg-blue-600 rounded-full w-10 h-10 p-2"
              size={20}
            />
          </Link>
          <Link href={""}>
            <AiOutlineInstagram
              className="text-white bg-blue-600 rounded-full w-10 h-10 p-2"
              size={20}
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-y-0 space-y-8 md:space-x-16">
        <div className="flex flex-col space-y-2">
          <p className="text-xl font-extralight pb-5 text-white">
            How it works
          </p>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">
              Hire Employees
            </p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">
              Hire Contractors
            </p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">
              Run Global Payroll
            </p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">
              Integrations
            </p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">Open API</p>
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-xl font-extralight pb-5 text-white">
            How it works
          </p>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">
              Compliance
            </p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">Payments</p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">Payments</p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">
              For Legal Teams
            </p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">
              For Hiring Managers
            </p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">Startup</p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">
              Enterprise
            </p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">
              Deel Solutions - Spain
            </p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">
              Deel Solutions - France
            </p>
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-xl font-extralight pb-5 text-white">
            How it works
          </p>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">About</p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">Blog</p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">
              Support hub
            </p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">
              Global Hiring Guide
            </p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">
              Partner Program
            </p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">
              Affiliates
            </p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">
              Case Studies
            </p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">Careers</p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">Glossary</p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">Press</p>
          </Link>
          <Link href={""}>
            <p className="text-base font-extralight text-white/90 ">
              Service Status
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
