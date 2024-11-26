"use client";
import { BiSupport } from "react-icons/bi";
import React from 'react'
import { RiSurveyLine } from "react-icons/ri";
import { MdAdsClick } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { useEffect } from "react";
const Features = () => {
      useEffect(() => {
        AOS.init({
          duration: 3000, // Animation duration (optional)
          once: true, // Animation happens only once (optional)
        });
      }, []);
  return (
    <div className="flex w-[100vw] justify-center items-center gap-10 mt-6 h-[50vh] bg-gradient-to-b from-[#266dad] via-[#424a9d] to-violet-950">
      <div className="w-56 h-72 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <RiSurveyLine size={40} />
        <a href="#">
          <h5 className="mb-2 mt-3 text-xl font-semibold tracking-tight text-blue-900 dark:text-white">
            ENQUIRE
          </h5>
        </a>
        <p className="mb-3 font-normal text-sm mr-4 text-gray-500 dark:text-gray-400">
          Enquire now to receive your first complimentary consultation with our
          expert, absolutely free! Get all the guidance you need about the
          admission process.
        </p>
      </div>
      <div className="w-56 h-72 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <MdAdsClick size={40} />
        <a href="#">
          <h5 className="mb-2 mt-3 text-xl font-semibold tracking-tight text-blue-900 dark:text-white">
            CHOOSE
          </h5>
        </a>
        <p className="mb-3 font-normal text-sm mr-4 text-gray-500 dark:text-gray-400">
          We connect you with the ideal medical school aligned with your
          aspirations, support you through every step, and secure your admission
          with assurance!
        </p>
      </div>
      <div className="w-56 h-72 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <BiSupport size={40} />
        <a href="#">
          <h5 className="mb-2 mt-3 text-xl font-semibold tracking-tight text-blue-900 dark:text-white">
            SUPPORT
          </h5>
        </a>
        <p className="mb-3 font-normal text-sm mr-4 text-gray-500 dark:text-gray-400">
          Experience dedicated on-ground support with guidance from medical
          students and experienced doctors right on campus!
        </p>
      </div>
      <div className="w-56 h-72 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <FaRegThumbsUp size={40} />
        <a href="#">
          <h5 className="mb-2 mt-3 text-xl font-semibold tracking-tight text-blue-900 dark:text-white">
            PRACTICE
          </h5>
        </a>
        <p className="mb-3 font-normal text-sm mr-4 text-gray-500 dark:text-gray-400">
          Gain hands-on hospital practice and real-life exposure to patients.
          Upon graduation, our doctors will assist you in registering in the UK
          or other EU countries
        </p>
      </div>
    </div>
  );
}

export default Features
