import React from 'react'
import Image from 'next/image';
const xVideosCard = ({ info }) => {
    return (
        <>

            {/* grid video views */}
            <div className="mt-4 bg-[#EEEFF5] rounded-lg p-2 mr-4">
                {/* <div className="flex flex-col md:flex-row  p-4"> */}
                <div className='relative rounded-t-lg'>
                    <Image src={`/news-champ.jpg`} alt="Description of the image" width="559" height="374" className=" m-auto rounded-lg sm:w-96 md:w-32 sm:h-60 w-96 h-80 lg:w-72 lg:h-72 " />
                    {/* 1 */}
                   <p class="text-xs">05 : 40</p>
                    {/* 2 */}
                    <div className="p-6 ">
                        <p className="my-5 font-siluguri font-normal text-2xl lg:text-xl">
                            <span className="px-3 py-2 rounded-lg bg-[#FBFBFB]">{info.category}</span>
                        </p>
                        <h3 className="font-siluguri font-normal text-2xl">{info.title}</h3>
                        <p className="mt-1  font-normal text-justify leading-6 text-xl lg:text-base">{info.description} </p>
                        <p className="mt-6 text-[#252525B8] text-xl lg:text-sm">{info.date}</p>
                    </div>
                </div>
            </div>
            {/* test */}
            <div className="mt-3 py-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
  <div className="bg-[#DEE0EC] p-2 rounded-lg">
    <div className="relative rounded-t-lg">
      <Image src="/news-champ.jpg"  height={33} width={44}alt="Image" />
      <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
        <img src="/row-play-icon.svg" />
      </div>
      <div className="absolute right-0 bottom-0 font-semibold px-1 py-[0.5px] flex gap-1 items-center bg-[#FFFFFFCC]">
        <div className="">
          <img src="/clock-icon.svg" />
        </div>
        <p className="text-xs">02 : 40</p>
      </div>
    </div>
    <div className="mt-3">
      <h3 className="font-siluguri text-base font-medium">
        Airee Montreal Tigers clinch GT20 Canada 2023 title
      </h3>
      <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
    </div>
  </div>
  <div className="bg-[#DEE0EC] p-2 rounded-lg">
    <div className="relative rounded-t-lg">
      <img src="/image-three.jpg" alt="Image" />
      <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
        <img src="/row-play-icon.svg" />
      </div>
      <div className="absolute right-0 bottom-0 font-semibold px-1 py-[0.5px] flex gap-1 items-center bg-[#FFFFFFCC]">
        <div className="">
          <img src="/clock-icon.svg" />
        </div>
        <p className="text-xs">02 : 40</p>
      </div>
    </div>
    <div className="mt-3">
      <h3 className="font-siluguri text-base font-medium">
        Airee Montreal Tigers clinch GT20 Canada 2023 title
      </h3>
      <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
    </div>
  </div>
  <div className="bg-[#DEE0EC] p-2 rounded-lg">
    <div className="relative rounded-t-lg">
      <img src="/image-three.jpg" alt="Image" />
      <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
        <img src="/row-play-icon.svg" />
      </div>
      <div className="absolute right-0 bottom-0 font-semibold px-1 py-[0.5px] flex gap-1 items-center bg-[#FFFFFFCC]">
        <div className="">
          <img src="/clock-icon.svg" />
        </div>
        <p className="text-xs">02 : 40</p>
      </div>
    </div>
    <div className="mt-3">
      <h3 className="font-siluguri text-base font-medium">
        Airee Montreal Tigers clinch GT20 Canada 2023 title
      </h3>
      <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
    </div>
  </div>
  <div className="bg-[#DEE0EC] p-2 rounded-lg">
    <div className="relative rounded-t-lg">
      <img src="/image-three.jpg" alt="Image" />
      <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
        <img src="/row-play-icon.svg" />
      </div>
      <div className="absolute right-0 bottom-0 font-semibold px-1 py-[0.5px] flex gap-1 items-center bg-[#FFFFFFCC]">
        <div className="">
          <img src="/clock-icon.svg" />
        </div>
        <p className="text-xs">02 : 40</p>
      </div>
    </div>
    <div className="mt-3">
      <h3 className="font-siluguri text-base font-medium">
        Airee Montreal Tigers clinch GT20 Canada 2023 title
      </h3>
      <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
    </div>
  </div>
</div>

        </>
    )
}

export default xVideosCard;

