import NewsCard from "@/components/News/NewsCard";
import { NextSeo } from "next-seo";
import NewsSidebar from "@/components/News/NewsSidebar";
import { recentNews } from "@/components/DataNews/recentNewsData";
import VideosCard from "@/components/Videos/Videoscard";
import React, { useState } from "react";

const Videos = () => {
  const [isVideoVisible, setVideoVisible] = useState(false);

  // Function to toggle the visibility of the video
  const toggleVideoVisibility = () => {
    setVideoVisible(!isVideoVisible);
  };
  const videonewslatest = [
    {
      title:
        "Dipendra Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
      category: "ICC World Cup",
      videolink:"https://www.youtube.com/embed/_P7JjijXlYg?list=RD_P7JjijXlYg",
      description:
        "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
      date: "Aug 06, 2023",
    },
    {
      title: "Dipendra Singh Airee’s Montreal Tigers",
      category: "Test Cup",
       videolink:"https://www.youtube.com/embed/vKEWFB4kirA",
      description:
        "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
      date: "Jan 16, 2023",
    },
    {
      title:
        "Dipendra Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
      category: "ICC World Cup",
       videolink:"https://www.youtube.com/embed/_P7JjijXlYg?list=RD_P7JjijXlYg",
      description:
        "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
      date: "Aug 06, 2023",
    },
    {
      title:
        "Dipendra Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
      category: "ICC World Cup",
       videolink:"https://www.youtube.com/embed/_P7JjijXlYg?list=RD_P7JjijXlYg",
      description:
        "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
      date: "Aug 06, 2023",
    },
    {
      title:
        "Dipendra Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
      category: "ICC World Cup",
       videolink:"https://www.youtube.com/embed/_P7JjijXlYg?list=RD_P7JjijXlYg",
      description:
        "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
      date: "Aug 06, 2023",
    },
  ];

  // console.log(news);

  // for News Sidebar
  //for tabs
  const tabs = [
    { id: "latestvideo", label: "Latest Videos" },
    { id: "seriesvideo", label: "Series" },
    { id: "tournamentvideo", label: "Tournament" },
    { id: "countryvideo", label: "Country" },
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
                className={`${
                  activeTab === tab.id
                    ? "text-white bg-cc-primary"
                    : "text-[#25252599] bg-[#E4E6F0] hover:bg-cc-primary hover:text-white"
                } py-3 px-12 font-medium cursor-pointer text-xl ${
                  tab.id === tabs[0].id
                    ? "rounded-l-lg"
                    : tab.id === tabs[tabs.length - 1].id
                    ? "rounded-r-lg"
                    : ""
                }`}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>
        <div
          id="latestvideo"
          className={`flex flex-col ${
            activeTab === "latestvideo" ? "block" : "hidden"
          }`}
        >
          {/* iframe video from tab below */}
         
         
          <iframe
            className=" pt-8 w-full md:h-72 lg:h-96 transform transition-transform duration-500 hover:scale-105 "
            src="https://www.youtube.com/embed/akyu9pSbArY"
            title="cricketcup"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
          
          <div className="sm:flex-col md:grid md:grid-cols-3 lg:grid lg:grid-cols-4  ">
            {videonewslatest.map((data, index) => (
              <VideosCard key={index} id={index + 1} info={data} />
            ))}
          </div>
        </div>
        {/* tournament videos */}
        <div
          id="seriesvideo"
          className={`flex flex-col ${
            activeTab === "seriesvideo" ? "block" : "hidden"
          }`}
        >
        <iframe
            className="pt-8 w-full md:h-72 lg:h-96 transform transition-transform duration-500 hover:scale-105 "
            src="https://www.youtube.com/embed/mVupXkSH4sQ"
            title="cricketcup"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
           <div className="sm:flex-col md:grid md:grid-cols-3 lg:grid lg:grid-cols-4  ">
            {videonewslatest.map((data, index) => (
              <VideosCard key={index} id={index + 1} info={data} />
            ))}
          </div>
        </div>
        {/* series video */}
        <div
          id="tournamentvideo"
          className={`flex flex-col ${
            activeTab === "tournamentvideo" ? "block" : "hidden"
          }`}
        >
          <iframe
            className=" pt-8 w-full md:h-72 lg:h-96 transform transition-transform duration-500 hover:scale-105 "
            src="https://www.youtube.com/embed/jasYgnLgaQg"
            title="cricketcup"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
           <div className="sm:flex-col md:grid md:grid-cols-3 lg:grid lg:grid-cols-4  ">
            {videonewslatest.map((data, index) => (
              <VideosCard key={index} id={index + 1} info={data} />
            ))}
          </div>
        </div>

        {/* country video */}
        <div
          id="countryvideo"
          className={`flex flex-col ${
            activeTab === "countryvideo" ? "block" : "hidden"
          }`}
        >
           <iframe
            className="pt-8 w-full md:h-72 lg:h-96 transform transition-transform duration-500 hover:scale-105 "
            src="https://www.youtube.com/embed/VOT1_mJn4Mk"
            title="cricketcup"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
           <div className="sm:flex-col md:grid md:grid-cols-3 lg:grid lg:grid-cols-4  ">
            {videonewslatest.map((data, index) => (
              <VideosCard key={index} id={index + 1} info={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
