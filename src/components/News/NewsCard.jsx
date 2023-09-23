import React from 'react'

const NewsCard = ({ info }) => {
    return (
        <>

            <div className="mt-4 bg-[#EEEFF5] rounded-lg sm:w-[725px] md:w-[725px]">
                <div className=" lg:flex sm:flex-col md:flex-col p-4">
                    <img src={`/news-champ.jpg`} width="399" height="238"  className="rounded-lg sm:m-auto sm:w-72 sm:h-48 md:m-auto md:w-[682px] md:h-96 lg:m-auto lg:h-64 lg:w-72"/>
                    <div className="p-6">
                        <p className="my-5 font-siluguri font-normal sm:text-xl md:text-2xl">
                            <span className="px-3 py-2 rounded-lg bg-[#FBFBFB]">{info.category}</span>
                        </p>
                        <h3 className="font-siluguri font-medium sm:text-3xl md:text-3xl">{info.title}</h3>
                        <p className="mt-1 text-sm font-normal text-justify leading-6 sm:text-2xl md:text-2xl">{info.description} </p>
                        <p className="mt-6 text-[#252525B8] md:text-xl">{info.date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsCard;

