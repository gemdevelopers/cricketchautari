import React from 'react'
import Image from 'next/image'

const TabContents = () => {
    return (
        <>
            <div className="col-span-8 ">
                <ul className="flex justify-center">
                    <li className="px-12 py-3 text-white font-medium cursor-pointer bg-cc-primary rounded-l-lg flex gap-2">
                        <img src={`news-icon.svg`} alt="News" />
                        <p>News</p>
                    </li>
                    <li className="px-12 py-3 text-cc-primary font-medium cursor-pointer flex gap-2 bg-[#e4e6f0] hover:bg-cc-primary hover:text-white">
                        <img src={`videos-icon.svg`} alt="Videos" />
                        <p>Videos</p>
                    </li>
                    <li className="px-12 py-3 text-cc-primary font-medium cursor-pointer flex gap-2 bg-[#e4e6f0] hover:bg-cc-primary hover:text-white">
                        <img src={`team-icon.svg`} alt="Teams" />
                        <p>Teams</p>
                    </li>
                    <li className="px-12 py-3 text-cc-primary font-medium cursor-pointer rounded-r-lg flex gap-2 bg-[#e4e6f0] hover:bg-cc-primary hover:text-white">
                        <img src={`live-icon.svg`} alt="Scroes" />
                        <p>Live Scores</p>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="my-5 flex justify-center items-center">
                        <button className="px-7 py-1 font-semibold text-2xl text-[#1d9391] border-[3px] border-[#1d9391] rounded-full shadow-lg">Tournament</button>
                    </div>
                    <div className="relative overflow-hidden">
                        <Image
                            src={`/news-1.jpg`}
                            width="775"
                            height="495"
                            className='transform transition-transform duration-500 hover:scale-110 w-full h-auto object-contain'
                            placeholder="blur"
                            blurDataURL="/cricket-chautari.svg"
                            alt="News"
                        />
                        <div className="px-12 py-6 absolute text-white bottom-0">
                            <h2 className="text-xl mb-2 font-siluguri font-semibold">Asia Cup 2023: Pakistan strongest XI</h2>
                            <p className="text-gray-200 text-justify"><span className="text-base font-semibold">Montreal Tigers</span> registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League Canada this year. Dipendra Singh Airee, who made his first-ever appearance in the international franchise league, achieved a sensational victory in the final </p>
                            <p className="mt-6">Aug 09, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabContents