import React, { useState } from 'react';
import Image from 'next/image';

const VideosCard = ({ info }) => {
  const [isVideoVisible, setVideoVisible] = useState(false);

  const handleVideoClick = () => {
    setVideoVisible(!isVideoVisible);
  };

  return (
    <>
      <div className="mt-4 bg-[#EEEFF5] rounded-lg p-2 mr-4">
        {/* 1 */}
        <div className="bg-[#DEE0EC] p-2 rounded-lg">
          <div className=" rounded-t-lg">
            <Image src="/news-champ.jpg" height={743} width={444} alt="Image" />
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={handleVideoClick}
            >
              <Image src="/row-play-icon.svg" height={243} width={224} />
            </div>
            <div className="absolute right-0 bottom-0 font-semibold px-1 py-[2px] flex gap-1 items-center bg-[#FFFFFFCC]">
              <div className="">
                <Image src="/clock-icon.svg" height={243} width={224} />
              </div>
              <p className="text-xs">02 : 40</p>
            </div>
          </div>
          <div className="mt-3">
            {/* Show video iframe only if isVideoVisible is true */}
            {isVideoVisible ? (
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/_P7JjijXlYg?list=RD_P7JjijXlYg"
                title="cricketcup"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              ></iframe>
            ) : (
              <>
                <h3
                  className="font-siluguri text-base font-medium cursor-pointer"
                  onClick={handleVideoClick}
                >
                  {info.title}
                </h3>
                <p className="pt-3 text-sm font-normal text-[#252525B8]">{info.date}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideosCard;
