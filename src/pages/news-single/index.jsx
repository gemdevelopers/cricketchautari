import React from "react";
import { NextSeo } from "next-seo";
import NewsSidebar from "@/components/News/NewsSidebar";
import NewsSingle from "@/components/News/NewsSingle";
import NewsSimilar from "@/components/News/NewsSimilar";
import { recentNews } from "@/components/DataNews/recentNewsData";
import {singleNewsData} from "@/components/DataNews/singleNewsData";




const newsSingle = () => {
    const news_similars = [
        {
            image: "/image-27.png",
            title: "England tour of West Indies, 2023",
            description: "Ricky Ponting's take on the slow over-rate fines",
            date: "Aug 06 ,2023",
        },
        {
            image: "/image-27.png",
            title: "Australia tour of West Indies, 2023",
            description: "Ricky 2 Ponting's take on the slow over-rate fines",
            date: "Sep 06 ,2022",
        },
        {
            image: "/image-27.png",
            title: "Indian tour of West Indies, 2023",
            description: "Ricky Ponting's take on the slow over-rate fines",
            date: "Dec 06 ,2023",
        },
        {
            image: "/image-27.png",
            title: "Nepal tour of West Indies, 2023",
            description: "Ricky 2 Ponting's take on the slow over-rate fines",
            date: "April 06 ,2022",
        },
        {
            image: "/image-27.png",
            title: "England tour of West Indies, 2023",
            description: "Ricky Ponting's take on the slow over-rate fines",
            date: "Jan 06 ,2023",
        },
    
    
    ]
   
    return (
        <>
            <NextSeo title={`News | Cricket Chautari`}
                description={`News | Cricket Chautari`}


            />
            <div className="ctr">
                <div className="w-[466px] h-6 my-10 ml-1">
                    <h2 className="font-siluguri text-xl font-semibold">Asia Cup 2023: Pakistan's strongest XI</h2>
                    <div className="border-b-2 border-[#238A6B]"></div>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-9">
                        {/* component news single */}

                        <div className="bg-[#EEEFF5]">
                            <div className="flex flex-col">

                            { singleNewsData.map((datasinglenews,indexsinglenews)=>(
                                 <NewsSingle key={indexsinglenews} single_news_data={datasinglenews}/>
                                )) }
                                
                            </div>
                        </div>

                    </div>
                    <div className="col-span-3">
                    <div className="mt-4 ml-4">
                <div className="bg-cc-primary py-[13px] pl-[7px] rounded-lg">
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
                    <h3 className="text-2xl font-semibold ">Similar News</h3>
                    <div className="border-b-2 border-[#238A6B]"></div>
                </div>
                {/* news similar component */}
                <div className="flex">
                    {news_similars.map((data3, index) => (


                        <NewsSimilar key={index} id={index + 1} infonewsimilars={data3} />
                    ))
                    }
                </div>

            </div>

        </>
    );
}
export default newsSingle;