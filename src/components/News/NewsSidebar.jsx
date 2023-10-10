import Image from 'next/image';
import React from 'react';

const NewsSidebar = ({recent_shorttitle}) => {
    return (
        <>
             <div className="bg-[#EEEFF5] w-80 py-3 mt-4  rounded-lg md:mr-[-142px]">
                    <div className="bg-[#EEEFF5] flex">
                        <div className="flex-shrink-0 ">
                            <img src="/image15.png" className="py-[7px] pl-2 rounded-[4px]  "alt="Description of the image"/>
                        </div>
                        <div className="my-[7px] pl-4 md:mr-1 mr-6 ">
                            {/* ttest12 */}
                            <h2 className="w-32 font-siluguri text-base font-medium text-[#252525] pb-4 text-justify">
                               {recent_shorttitle.heading_recent}
                            </h2>
                            <p className="text-[#252525B8] lg:text-sm">{recent_shorttitle.date_recent}</p>
                        </div>
                    </div>
                </div>
        </>
    );
};
export default NewsSidebar;
