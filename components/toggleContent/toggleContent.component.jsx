"use client";

import React, { useState } from "react";
import {Qna} from '../../assest/qna.webp'
const services = [
  {
    title: "Academic orientation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 text-blue-500"
      >
        <path d="M12 2L1 9l11 7 9-5.91V20h2V8L12 2z" />
      </svg>
    ),
    content:
      "Our academic orientation is designed to help newcomers smoothly transition into campus life. We’ll provide a detailed overview of the education system, campus resources, and your new schedule, ensuring you’re fully prepared to thrive in your academic journey and adapt to your new surroundings with ease.",
  },
  {
    title: "University Admission",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 text-blue-500"
      >
        <path d="M3 9v11h18V9L12 4 3 9zm16 9H5v-7l7-4 7 4v7z" />
      </svg>
    ),
    content:
      "We guide you through every step of the university admission process, ensuring a seamless and stress-free experience. From application to enrollment, we provide expert assistance, so you can focus on your education and start your academic journey with confidence.",
  },
  {
    title: "Visa procedure",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 text-blue-500"
      >
        <path d="M17 10h-1V9a6 6 0 00-12 0v1H3a1 1 0 000 2h1v7a2 2 0 002 2h10a2 2 0 002-2v-7h1a1 1 0 000-2zM7 9a4 4 0 018 0v1H7V9zm2 6a1 1 0 01-2 0v-2a1 1 0 012 0v2zm8 2H9a1 1 0 010-2h8a1 1 0 010 2z" />
      </svg>
    ),
    content:
      "We will assist you in obtaining your student visa on time, ensuring a smooth and efficient process. Additionally, all the necessary visa procedures and paperwork for studying abroad will be managed under our expert guidance, allowing you to focus on your academic journey without any hassle.",
  },
  {
    title: "University accommodation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 text-blue-500"
      >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
    content:
      "We will assist you in securing comfortable university accommodation, including hostels, so you don’t have to worry about finding a place to stay. Additionally, most universities provide mess facilities, ensuring you have convenient access to meals during your stay.",
  },
];

const ToggleContent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContentItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

    return (
      <div className="w-[100vw] h-[110vh] bg-[#1e40af] flex justify-center items-center">
        <div className="w-[60vw] h-[110vh] mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-center text-black mb-20 mt-28">
            Complete Services to Empower Your Success
          </h2>
          <div className="space-y-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <button
                  className="flex items-center justify-between w-full p-5 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-300"
                  onClick={() => toggleContentItem(index)}
                >
                  <div className="flex items-center gap-6">
                    {service.icon}
                    <span className="font-semibold text-gray-800 text-xl">
                      {service.title}
                    </span>
                  </div>
                  <span
                    className={`text-blue-600 font-bold text-2xl transform transition duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-6 py-4 bg-white text-gray-700 text-sm transition-all duration-500">
                    {service.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default ToggleContent;
