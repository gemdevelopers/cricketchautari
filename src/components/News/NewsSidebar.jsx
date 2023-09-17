import React from 'react';

const NewsSidebar = ({recent_shorttitle}) => {
    return (
        <>
             <div className="bg-[#EEEFF5] py-3 mt-4  rounded-lg">
                    <div className="bg-[#EEEFF5] flex">
                        <div className="flex-shrink-0 ">
                            <img src="/image -15.png" className="py-[7px] pl-2 rounded-[4px] sm:h-[45vh] "/>
                        </div>
                        <div className="my-[7px] pl-4 mr-6 ">
                            {/* ttest12 */}
                            <h2 className="font-siluguri text-sm/[22.64px] font-medium text-[#252525 pb-4 text-justify sm:text-4xl">
                               {recent_shorttitle.heading_recent}
                            </h2>
                            <p className="text-[#252525B8]">{recent_shorttitle.date_recent}</p>
                        </div>
                    </div>
                </div>
        </>
    );
};
export default NewsSidebar;
