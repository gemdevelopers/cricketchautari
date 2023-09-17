import NewsCard from "@/components/News/NewsCard";
import { NextSeo } from "next-seo";
import NewsSidebar from "@/components/News/NewsSidebar";
import { recentNews } from "@/components/DataNews/recentNewsData";
import React from "react";

const News = () => {
    const news = [
        {
            title: "Dipendra Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
            category: "ICC World Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Aug 06, 2023"
        },
        {
            title: "Dipendra Singh Airee’s Montreal Tigers",
            category: "Test Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Jan 16, 2023"
        },
        {
            title: "Dipendra Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
            category: "ICC World Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Aug 06, 2023"
        },
        {
            title: "Dipendra Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
            category: "ICC World Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Aug 06, 2023"
        },
        {
            title: "Dipendra Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
            category: "ICC World Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Aug 06, 2023"
        }
    ]

    // console.log(news);

    // for News Sidebar
  
    return (
        <>
            <NextSeo
                title={`News | Cricket Chautari`}
                description={`News | Cricket Chautari`}
            />
            <div className="ctr">
                <div className="mt-8">
                    <ul className="pl-4 flex justify-center items-center sm:w- sm:w-max sm:ml-[-20px]">
                        <li className="text-white py-3 px-12 bg-cc-primary font-medium cursor-pointer text-xl rounded-l-lg">Latest News</li>
                        <li className="py-3 px-12 text-[#25252599] font-medium cursor-pointer text-xl bg-[#E4E6F0] hover:bg-cc-primary hover:text-white">Tournament</li>
                        <li className="py-3 px-12 text-[#25252599] font-medium cursor-pointer text-xl bg-[#E4E6F0] hover:bg-cc-primary hover:text-white">Series</li>
                        <li className="py-3 px-12 text-[#25252599] font-medium cursor-pointer text-xl bg-[#E4E6F0] rounded-r-lg hover:bg-cc-primary hover:text-white">Country</li>
                    </ul>
                </div>

                <div className="mt-10 grid grid-cols-12">
                    <div className=" col-span-9 sm:col-span-12 ">
                        {news.map((data, index) => (

                            <NewsCard key={index} id={index + 1} info={data} />
                        ))
                        }
                    </div>
                    <div className="col-span-3 sm:col-start-1 sm:col-end-12 sm:w-[720px]  sm:text-xl"> 
                    <div className="mt-4 ml-4  ">
                    <div className="bg-cc-primary py-[13px] pl-[7px] rounded-lg sm:text-2xl">
                        <span className="font-medium  text-[#F4F4F4] w-[106px]">
                            Most Read
                        </span>
                    </div>
                {
                      recentNews.map((data1,index1)=>(
                          <NewsSidebar key={index1} recent_shorttitle={data1}/>

                      ))
                        }
            </div>         
                  
                    </div>
                </div>

            </div>
        </>
    )
}

export default News