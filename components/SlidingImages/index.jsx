'use client'

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";
const slider1 = [
  {
    color: "#F4F4F4", // Light Gray
    src: "Bangladesh.png",
    src2: "bangladesh.svg",
    text: "Bangladesh",
  },
  {
    color: "#D9E6F2", // Soft Blue
    src: "Georgia.jpg",
    src2: "georgia.svg",
    text: "Georgia",
  },
  {
    color: "#C9D6DF", // Muted Grayish Blue
    src: "Kazakhstan.jpg",
    src2: "kazakhstan.svg",
    text: "Kazakhstan",
  },
  {
    color: "#A8B5C3", // Slate Gray
    src: "Kyrgyzstan.jpg",
    src2: "kyrgyzstan.svg",
    text: "Kyrgyzstan",
  },
];

const slider2 = [
  {
    color: "#78909C", // Neutral Gray-Blue
    src: "Georgia.jpg",
    src2: "georgia.svg",
    text: "Georgia",
  },
  {
    color: "#EDEDED", // Subtle Off White
    src: "Poland.avif",
    src2: "poland.svg",
    text: "Poland",
  },
  {
    color: "#BCCCDC", // Cool Blue Gray
    src: "russia.jpg",
    src2: "russia.svg",
    text: "Russia",
  },
  {
    color: "#98AFC7", // Light Steel Blue
    src: "Vietnam.jpg",
    src2: "vietnam.svg",
    text: "Vietnam",
  },
];


export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>

      <h1 className=" font-bold text-5xl text-center mb-10">
        Study In Best Destinations
</h1>


      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
                <div className="absolute bottom-2 flex text-white font-extrabold justify-center items-center gap-4">
                  <Image
                    className=" rounded-full border-2 ml-2"
                    width={60}
                    height={60}
                    src={`/country-flags/${project.src2}`}
                    alt=""
                  />
                  <div className="bg-gray-400 px-5 py-2 rounded-full ">
                    <h1 className=""> Study In {project.text}</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
                <div className="absolute bottom-2 flex text-white font-extrabold justify-center items-center gap-4">
                  <Image
                    className=" rounded-full border-2 ml-2"
                    width={60}
                    height={60}
                    src={`/country-flags/${project.src2}`}
                    alt=""
                  />
                  <div className="bg-gray-400 px-5 py-2 rounded-full ">
                    <h1 className=""> Study In {project.text}</h1>
                  </div>
                </div>
              </div>
              
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
