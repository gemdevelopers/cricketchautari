import NewsCard from "@/components/News/NewsCard";
import { NextSeo } from "next-seo";
import NewsSidebar from "@/components/News/NewsSidebar";
import { recentNews } from "@/components/DataNews/recentNewsData";

import Footer from "@/components/Footer/Footer";
import React, { useState } from 'react';
import NewsCardLatestNews from "@/components/News/NewsCard";
import NewsTournamen from "@/components/News/NewsTournament";
import NewsSerie from "@/components/News/NewsSeries";
import CountryNewS from "@/components/News/CountryNews";
const News = () => {
    // latest news
    const newslatesh1 = [
        {
            title: "aDipendra Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
            category: "ICC World Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Aug 06, 2023"
        },
        {
            title: "Dipendra Singh Airees Montreal Tigers",
            category: "Test Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Jan 16, 2023"
        },
        {
            title: "Dipendra Singh Airees Montreal Tigers clinch GT20 Canada 2023 title",
            category: "ICC World Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Aug 06, 2023"
        },
        {
            title: "Dipendra Singh Airees Montreal Tigers clinch GT20 Canada 2023 title",
            category: "ICC World Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Aug 06, 2023"
        },
        {
            title: "Dipendra Singh Airees Montreal Tigers clinch GT20 Canada 2023 title",
            category: "ICC World Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Aug 06, 2023"
        }
    ];
    // tournament
    const tournamentnews = [

        {
            title: "Sandip Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
            category: "ICC World Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Aug 06, 2023"
        },
        {
            title: "Sachin Singh Airees Montreal Tigers",
            category: "Test Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Jan 16, 2023"
        },
        {
            title: "Singh Airees Montreal Tigers clinch GT20 Canada 2023 title",
            category: "ICC World Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Aug 06, 2023"
        },
        {
            title: "Raj Singh Airees Montreal Tigers clinch GT20 Canada 2023 title",
            category: "ICC World Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Aug 06, 2023"
        }

    ];
    // series
    const seriesnew1=[
        {
            title: "Raj1 Singh Airees Montreal Tigers clinch GT20 Canada 2023 title",
            category: "ICC World Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Aug 06, 2023"
        },
        {
            title: "Raj2 Singh Airees Montreal Tigers clinch GT20 Canada 2023 title",
            category: "ICC World Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Aug 06, 2023"
        }

    ];
    const countrynews=[
        {
            title: "Bikash1 Singh Airees Montreal Tigers clinch GT20 Canada 2023 title",
            category: "ICC World Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Aug 06, 2023"
        },
        {
            title: "Bikash2 Singh Airees Montreal Tigers clinch GT20 Canada 2023 title",
            category: "ICC World Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Aug 06, 2023"
        },
        {
            title: "Bikash3 Singh Airees Montreal Tigers clinch GT20 Canada 2023 title",
            category: "ICC World Cup",
            description: "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
            date: "Aug 06, 2023"
        }

    ]
    const tabs = [
        { id: 'latestNews', label: 'Latest News' },
        { id: 'tournament', label: 'Tournament' },
        { id: 'series', label: 'Series' },
        { id: 'country', label: 'Country' },
    ];


    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const changeTab = (tabId) => {
        setActiveTab(tabId);
        // Add additional logic here if needed
    };

    return (
        <>
            <NextSeo
                title={`News | Cricket Chautari`}
                description={`News | Cricket Chautari`}
            />
            <div className="ctr">

                <div className="mt-8">
                    <ul className="pl-4 lg:flex justify-center items-center ">
                        {tabs.map((tab) => (
                            <li
                                key={tab.id}
                                onClick={() => changeTab(tab.id)}
                                className={`${activeTab === tab.id
                                    ? 'text-white bg-cc-primary'
                                    : 'text-[#25252599] bg-[#E4E6F0] hover:bg-cc-primary hover:text-white'
                                    } py-3 px-12 font-medium cursor-pointer text-xl ${tab.id === tabs[0].id ? 'rounded-l-lg' : tab.id === tabs[tabs.length - 1].id ? 'rounded-r-lg' : ''
                                    }`}
                            >
                                {tab.label}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-10 grid grid-cols-12 gap-14 md:gap-20">
                    {/* latest news section start  */}
                    <div
                        id="latestNews"
                        className={`col-span-12 sm:col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-12 ${activeTab === 'latestNews' ? 'block' : 'hidden'
                            }`}
                    >
                        {newslatesh1.map((data, index) => (
                            <NewsCardLatestNews key={index} id={index + 1} info={data} />
                        ))}
                    </div>
                    {/* latest news end */}
                    {/* Tournament start tab */}
                    <div
                        id="tournament"
                        className={`col-span-12 sm:col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-12 ${activeTab === 'tournament' ? 'block' : 'hidden'
                            }`}
                    >
                        {tournamentnews.map((datatournamnet,index)=>(
                           <NewsTournamen key={index} id={index +1} infot={datatournamnet} /> 
                        ))}


                    </div>
                    {/* Tournament end tab */}

                    {/* Series tab start  content */}
                    <div
                        id="series"
                        className={`col-span-12 sm:col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-12 ${activeTab === 'series' ? 'block' : 'hidden'
                            }`}
                    >
                       {seriesnew1.map((dataseries,index)=>(
                        <NewsSerie key={index} id={index +1} infos={dataseries}/>
                       ))}

                    </div>
                    {/* Series tab end  content */}
                    {/* Country tab start  content */}
                    <div
                        id="country"
                        className={`col-span-12 sm:col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-12 ${activeTab === 'country' ? 'block' : 'hidden'
                            }`}
                    >
                        {countrynews.map((datacountry,index)=>(
                           <CountryNewS key={index} id={index+1} infoc={datacountry}/>
                        ))}


                    </div>
                    {/* Country tab end  content */}
                    <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-12">
                        <div className="mt-4 ml-0 lg:w-80">
                            <div className="bg-cc-primary py-[13px] pl-[7px] rounded-lg">
                                <span className="font-medium text-[#F4F4F4] w-[106px]">
                                    Most Read
                                </span>
                            </div>
                            {recentNews.map((data1, index1) => (
                                <NewsSidebar key={index1} recent_shorttitle={data1} />
                            ))}
                        </div>
                    </div>
                </div>
                {/* end section  */}
            </div>
            <div className="bg-[#525151]">
                <Footer />
            </div>
        </>
    )
}

export default News