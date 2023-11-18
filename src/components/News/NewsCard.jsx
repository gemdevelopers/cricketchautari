import React from 'react'
import Image from 'next/image';
const NewsCardLatestNews = ({ info }) => {
    return (
        <>

            <div className="mt-4 bg-[#EEEFF5] rounded-lg mr-4">
                <div className="flex flex-col md:flex-row  p-4 w-430px">
                    <Image src={`/news-champ.jpg`} alt="Description of the image" width="399" height="238" placeholder="blur"    blurDataURL={`/cricket-chautari.svg` }className="transform transition-transform duration-500 hover:scale-110 m-auto rounded-lg sm:w-full md:w-full sm:h-auto w-72 lg:w-72 lg:h-72 "/>
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
        </>
    )
}

export default NewsCardLatestNews;

