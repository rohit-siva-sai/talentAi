import { db } from "@/config/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const cyberCities = [
  "Bengaluru",
  "Hyderabad",
  "Mumbai",
  "Delhi",
  "Pune",
  "Chennai",
  "Gurugram",
  "Noida",
  "Kolkata",
  "Ahmedabad",
];

const userDetails = {
  firstName: "",
  lastName: "",
  workEmail: "",
  companySize: "",
  headquarters: "",
};
const Download = () => {
  const [updateUser, setUpdateUser] = useState(userDetails);

  const userCollection = collection(db, "users");

  const submitNewUser = async () => {
    try {
      await setDoc(doc(userCollection), {
        firstName: updateUser.firstName,
        lastName: updateUser.firstName,
        workEmail: updateUser.firstName,
        companySize: updateUser.companySize,
        headquarters: updateUser.headquarters,
      });
      setUpdateUser(userDetails)
     
    } catch (err) {
      console.log(err);
    }
   
  };

  const handleChange = (e) => {
    if (e.target.name == "firstName")
      setUpdateUser((prev) => ({ ...prev, firstName: e.target.value }));
    else if (e.target.name == "lastName")
      setUpdateUser((prev) => ({ ...prev, lastName: e.target.value }));
    else if (e.target.name == "workEmail")
      setUpdateUser((prev) => ({ ...prev, workEmail: e.target.value }));
    else if (e.target.name == "companySize") {
      console.log("ee", e);

      setUpdateUser((prev) => ({ ...prev, companySize: e.target.value }));
    } else if (e.target.name == "headquarters")
      setUpdateUser((prev) => ({ ...prev, headquarters: e.target.value }));
  };
  console.log("eee", updateUser);

  return (
    <div
      style={{
        backgroundImage: `url(https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/Global%20Hiring%20Guides/Stocksy_txp6f2c9d156aJ300_edited%201.png)`,
      }}
      className="group mx-4 md:mx-36 flex items-center justify-start  rounded-2xl mt-6 mb-24  bg-cover px-6 py-8 md:py-16 md:px-16   bg-center bg-no-repeat "
    >
      <div className="md:w-[700px] w-full px-6 md:px-10 py-12 flex flex-col space-y-6 rounded-3xl border bg-white">
        <div className="flex space-x-4 md:space-x-6 items-start">
          <Image
            src={
              "https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/Global%20Hiring%20Guides/btn_download.svg"
            }
            width={40}
            height={40}
          />
          <p className="text-2xl md:text-3xl font-semibold text-[#15357a]">
            Download the complete guide to hiring in India
          </p>
        </div>
        <p className="text-lg font-extralight text-[#15357a]">
          Simply fill out your details below to gain access to our complete
          guide to hiring in India.
        </p>
        <div className="flex flex-col space-y-8">
          <div className="grid grid-cols-1 gap-y-6 md:gap-y-0 md:grid-cols-2 md:gap-x-4">
            <div className="flex flex-col space-y-1">
              <p className="text-gray-800 font-extralight">First name</p>
              <input
                type="text"
                name="firstName"
                value={updateUser.firstName}
                id=""
                onChange={handleChange}
                placeholder="John"
                className="border outline-none px-4 py-3 text-gray-500 focus:border-blue-600 "
              />
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-gray-800 font-extralight">Last name</p>
              <input
                type="text"
                name="lastName"
                value={updateUser.lastName}
                id=""
                onChange={handleChange}
                placeholder="Rogers"
                className="border outline-none px-4 py-3 text-gray-500 focus:border-blue-600 "
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-gray-800 font-extralight">Work Email</p>
            <input
              type="text"
              name="workEmail"
              value={updateUser.workEmail}
              id=""
              onChange={handleChange}
              placeholder="workemail@gmail.com"
              className="border outline-none px-4 py-3 text-gray-500 focus:border-blue-600 "
            />
          </div>
          <div className="grid grid-cols-1 gap-y-6 md:gap-y-0 md:grid-cols-2 md:gap-x-4">
            <div className="flex flex-col space-y-1">
              <p className="text-gray-800 font-extralight">
                How many people work at your company?
              </p>
              <select
                name="companySize"
                id=""
                onChange={handleChange}
                value={updateUser.companySize}
                className="border appearance-none    outline-none px-4 py-3 text-gray-500 focus:border-blue-600 "
              >
                <option value="" disabled={true}>
                  please select
                </option>
                <option value="1-50">1 - 50</option>
                <option value="51-200">51 - 200</option>
                <option value="201-2000">201 - 2000</option>
                <option value="2000+">2000+</option>
              </select>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-gray-800 font-extralight">Headquarters</p>
              <select
                name="headquarters"
                id=""
                onChange={handleChange}
                value={updateUser.headquarters}
                className="border appearance-none    outline-none px-4 py-3 text-gray-500 focus:border-blue-600 "
              >
                <option value="" disabled={true}>
                  please select
                </option>
                {cyberCities.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <p className="text-xs text-gray-600">
            We respect your data. By submitting this form, you agree that we
            will contact you in relation to our products and services, in
            accordance with our privacy policy.
          </p>
          <div
            onClick={submitNewUser}
            disabled={updateUser.firstName.length == 0 ? true : false}
            className={`px-8  py-3 text-white bg-blue-600 font-semibold hover:opacity-90 cursor-pointer w-fit rounded-3xl`}
          >
            Download the Guide
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
