import React from "react";
import { NextSeo } from "next-seo";
import NewsSidebar from "@/components/News/NewsSidebar";
import NewsSingle from "@/components/News/NewsSingle";
import NewsSimilar from "@/components/News/NewsSimilar";
import { recentNews } from "@/components/DataNews/recentNewsData";
import {singleNewsData} from "@/components/DataNews/singleNewsData";
import {similarNewsShowData} from "@/components/DataNews/similarNewsData"
import SliderSimilarSingleNews from "@/components/News/SliderSimilarSingleNews";




const newsSingle = () => {
   
   
    return (
        <>
            <NextSeo title={`News | Cricket Chautari`}
                description={`News | Cricket Chautari`}


            />
            <div className="ctr">
                <div className="w-[466px] h-6 my-10 ml-1">
                    <h2 className="font-siluguri text-xl font-semibold  sm:text-6xl">Asia Cup 2023: Pakistan's strongest XI</h2>
                    <div className="border-b-2 border-[#238A6B]"></div>
                </div>
              
                <div className="grid grid-cols-12">
                    <div className="col-span-9 sm:col-span-12 sm:w-[1582px]">
                        {/* component news single */}

                        <div className="bg-[#EEEFF5]">
                            <div className="flex flex-col">

                            { singleNewsData.map((datasinglenews,indexsinglenews)=>(
                                 <NewsSingle key={indexsinglenews} single_news_data={datasinglenews}/>
                                )) }
                                
                            </div>
                        </div>

                    </div>
                    <div className="col-span-3 sm:col-start-1 sm:col-end-12 sm:w-[1582px]">
                    <div className="mt-4 ml-4">
                <div className="bg-cc-primary py-[13px] pl-[7px] rounded-lg  sm:text-6xl">
                    <span className="font-medium  text-[#F4F4F4] w-[106px]">
                        Most Read
                    </span>
                </div>
                {
                      recentNews.map((data4,index4)=>(
                          <NewsSidebar key={index4} recent_shorttitle={data4}/>

                      ))
                        }
            </div>         
                    </div>
                </div>
                <div className="my-7">
                    <h3 className="text-2xl font-semibold   sm:text-5xl">Similar News</h3>
                    <div className="border-b-2 border-[#238A6B]"></div>
                </div>
                {/* news similar component */}
                <div className="flex  -mx-2">
               
                    {similarNewsShowData.map((data3, index) => (
                        

                        <SliderSimilarSingleNews key={index} id={index + 1} infonewsimilars={data3} />
                      
                    ))
                    }
                     
                </div>

            </div>

        </>
    );
}
export default newsSingle;