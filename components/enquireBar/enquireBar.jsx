import React from 'react'
import { IoMailSharp } from "react-icons/io5";
import { IoMdCall,IoLogoWhatsapp } from "react-icons/io";
import Link from 'next/link';
import { FaTwitter,FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
const EnquireBar = () => {
  return (
    <div className="bg-[#246fae] w-[100vw] p-2 flex justify-evenly">
      <div className="flex gap-5 text-white text-sm">
        <Link
          href="mailto:athervisingh@gmail.com"
          className="flex gap-3 items-center justify-center  text-white"
        >
          <IoMailSharp className="" size={20} />
          enquire@gmail.com
        </Link>
        <Link
          href="tel:+911234567890"
          className="flex gap-3 items-center justify-center text-white"
        >
          <IoMdCall size={20} />
          +91 1234567890
        </Link>
      </div>
      <div className="flex text-white gap-5">
        <IoLogoWhatsapp className="cursor-pointer" size={20} />
        <FaTwitter className="cursor-pointer" size={20} />
        <FaFacebookF className="cursor-pointer" size={20} />
        <AiFillInstagram className="cursor-pointer" size={20} />
        <FaLinkedin className="cursor-pointer" size={20} />
      </div>
    </div>
  );
}

export default EnquireBar
