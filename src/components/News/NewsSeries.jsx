import React from 'react'
import Image from 'next/image';

const NewsSerie = ({infos}) => {
  return (
    <>
    <div className="mt-4 bg-[#EEEFF5] rounded-lg mr-4">
      <div className="flex flex-col md:flex-row  p-4">
        {/* reference */}
        {/* <Image src={`/news-champ.jpg`} alt="Description of the image" width="559" height="374" className=" m-auto rounded-lg sm:w-96 md:w-32 sm:h-60 w-96 h-80 lg:w-72 lg:h-72 " /> */}
        <Image src={`/news-champ.jpg`} alt="Description of the image" width="399" height="238" placeholder="blur"    blurDataURL={`/cricket-chautari.svg` }className="transform transition-transform duration-500 hover:scale-110 m-auto rounded-lg sm:w-full md:w-full sm:h-auto w-72 lg:w-72 lg:h-72 "/>
        <div className="p-6 ">
          <p className="my-5 font-siluguri font-normal text-2xl lg:text-xl">
            <span className="px-3 py-2 rounded-lg bg-[#FBFBFB]">{infos.category}</span>
          </p>
          <h3 className="font-siluguri font-normal text-2xl">{infos.title}</h3>
          <p className="mt-1  font-normal text-justify leading-6 text-xl lg:text-base">{infos.description} </p>
          <p className="mt-6 text-[#252525B8] text-xl lg:text-sm">{infos.date}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default NewsSerie