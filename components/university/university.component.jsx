import React from 'react'
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

const University = () => {
  return (
    <div className="w-[100vw] h-[90vh] pt-20">
      <div>
        <h1 className="text-5xl text-center ">
          Our <b>Top Ranked</b> Partners
        </h1>
        <h1 className="text-xl mt-4 text-center">
          Our partners are trusted experts, committed to providing reliable and
          top-quality education.
        </h1>
        <div className="flex justify-evenly items-center">
          <div className="mt-16 gap-10 flex flex-col ml-20">
            <div className="flex gap-10">
              <div className="flex w-56 h-24 rounded-xl border-2 border-gray-950 justify-center items-center bg-gray-300 p-4">
                <img src="/collegeLogo/c1.png" className="w-20 h-20" alt="" />
                <h1>Crimea federal university </h1>
              </div>
              <div className="flex gap-4 w-56 h-24 rounded-xl border-2 border-gray-950 justify-center items-center bg-gray-300 p-4">
                <img src="/collegeLogo/c2.png" className="w-20 h-20" alt="" />
                <h1>Samara state university </h1>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="flex gap-4 w-56 h-24 rounded-xl border-2 border-gray-950 justify-center items-center bg-gray-300 p-4">
                <img
                  src="/collegeLogo/c3.webp"
                  className="w-20 h-20 rounded-full"
                  alt=""
                />
                <h1>Ural state university </h1>
              </div>
              <div className="flex w-56 h-24 gap-4 rounded-xl border-2 border-gray-950 justify-center items-center bg-gray-300 py-4 px-2">
                <img
                  src="/collegeLogo/c4.png"
                  className="w-[70px] h-[70px] rounded-full"
                  alt=""
                />
                <h1>Siberian state medical university </h1>
              </div>
            </div>
          </div>

          <div className=" mt-[60px] ">
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc="/video/v2.mp4"
              thumbnailSrc="/images/thumb2.jpg"
              thumbnailAlt="Hero Video"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default University
