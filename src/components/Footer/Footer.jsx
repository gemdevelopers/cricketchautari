import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="ctr">
                <div className="py-4 mb-2 border-b-[1px] border-[#A1A1A1]">
                    <ul className="flex justify-end items-center">
                        <li className="ml-4">
                            <img src={`fb.svg`} alt="Image" />
                        </li>
                        <li className="ml-4">
                            <img src={`v-x.svg`} alt="Image" />
                        </li>
                        <li className="ml-4">
                            <img src={`yt.svg`} alt="Image" />
                        </li>
                    </ul>
                </div>


                {/* <div className="mb-7"><hr className="text-[#A1A1A1]" /></div> */}
                {/* <div className="w-full h-1 mb-7 bg-[#A1A1A1]"></div> */}
                {/* <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-full" height="1" viewBox="0 0 1341 2" fill="none">
  <path d="M0 1C523.693 1 817.307 1 1341 1" stroke="#A2A2A2"/>
</svg>

                </div> */}

                <div className="py-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-20">
                    <div className="mx-auto">
                        <img src={`/cricket-chautari-white.svg`} />
                    </div>
                    <div className=" text-center">
                        <h3 className="mb-2 text-white text-[22px] font-normal">Quick Links</h3>
                        <ul>
                            <li className="py-2 font-siluguri font-normal text-sm text-white lg:text-base">Home</li>
                            <li className="py-2 font-siluguri font-normal text-sm text-white lg:text-base">News</li>
                            <li className="py-2 font-siluguri font-normal text-sm text-white lg:text-base">Videos</li>
                        </ul>
                    </div>
                    <div className=" text-center">
                        <h3 className="mb-2 text-white text-[22px] font-normal">Top Series</h3>
                        <ul>
                            <li className="py-2 font-siluguri font-normal text-sm text-white lg:text-base">Indian Premier League (IPL)</li>
                            <li className="py-2 font-siluguri font-normal text-sm text-white lg:text-base">Caribbean Premier Leahue (CPL)</li>
                            <li className="py-2 font-siluguri font-normal text-sm text-white lg:text-base">Pakistan Super League (PSL)</li>
                            <li className="py-2 font-siluguri font-normal text-sm text-white lg:text-base">Big Bash league (BBL)</li>
                        </ul>
                    </div>
                    <div className=" text-center">
                        <h3 className="mb-2 text-white text-[22px] font-normal">Trending News</h3>
                        <ul>
                            <li className="py-2 font-siluguri font-normal text-sm text-white lg:text-base underline">Dipendra Singh Airee’s Montreal </li>
                            <li className="py-2 font-siluguri font-normal text-sm text-white lg:text-base underline">Nepal ends Emerging Teams </li>
                            <li className="py-2 font-siluguri font-normal text-sm text-white lg:text-base underline">Tigers clinch GT20 Canada 2023 </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer