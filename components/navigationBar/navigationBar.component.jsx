import React from "react";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="flex justify-evenly items-center h-16 sticky top-0 bg-white z-10 shadow-md">
      <img className="w-20 h-20" src="images/logo.png" alt="Logo" />
      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/universities">Universities</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavigationBar;
