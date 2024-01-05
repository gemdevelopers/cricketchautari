import { NextSeo } from "next-seo";
import React, { useState } from "react";
import VideosCard from "@/components/Videos/Videoscard";
import { useRouter } from "next/router";

import {
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  InstagramIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";

const Videos = () => {
  const videonewslatest = [
    {
      title:
        "Dipendra Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
      category: "ICC World Cup",
      videolink: "https://www.youtube.com/embed/rz7jlsUSgzE",
      description:
        "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
      date: "Aug 06, 2023",
    },
    {
      title: "Dipendra Singh Airee’s Montreal Tigers",
      category: "Test Cup",
      videolink: "https://www.youtube.com/embed/EkvpDjuSanA",
      description:
        "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
      date: "Jan 16, 2023",
    },
    {
      title:
        "Dipendra Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
      category: "ICC World Cup",
      videolink: "https://www.youtube.com/embed/nOcfav-aDnk",
      description:
        "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
      date: "Aug 06, 2023",
    },
    {
      title:
        "Dipendra Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
      category: "ICC World Cup",
      videolink: "https://www.youtube.com/embed/CCsBkVRmHN4",
      description:
        "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
      date: "Aug 06, 2023",
    },
    {
      title:
        "Dipendra Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
      category: "ICC World Cup",
      videolink: "https://www.youtube.com/embed/nOcfav-aDnk",
      description:
        "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
      date: "Aug 06, 2023",
    },
  ];

  // series and country videos
  // series
  const videoseries = [
    {
      title:
        "Rohit Sharma Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
      category: "ICC World Cup",
      videolink: "https://www.youtube.com/embed/EkvpDjuSanA",
      description:
        "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
      date: "Aug 06, 2023",
    },
    {
      title: "Dipendra Singh Airee’s Montreal Tigers",
      category: "Test Cup",
      videolink: "https://www.youtube.com/embed/nOcfav-aDnk",
      description:
        "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
      date: "Jan 16, 2023",
    },
    {
      title: "Doni Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
      category: "ICC World Cup",
      videolink: "https://www.youtube.com/embed/EkvpDjuSanA",
      description:
        "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
      date: "Aug 06, 2023",
    },
    {
      title:
        "Dipendra Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
      category: "ICC World Cup",
      videolink: "https://www.youtube.com/embed/nOcfav-aDnk",
      description:
        "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
      date: "Aug 06, 2023",
    },
    {
      title:
        "Dipendra Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
      category: "ICC World Cup",
      videolink: "https://www.youtube.com/embed/nOcfav-aDnk",
      description:
        "Montreal Tigers registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League e league, achieved a sensational victory in the final rs to clinch the",
      date: "Aug 06, 2023",
    },
  ];
 

  const tabs = [
    { id: "latestvideo", label: "Latest Videos" },
    { id: "seriesvideo", label: "Series" },
    { id: "tournamentvideo", label: "Tournament" },
    { id: "countryvideo", label: "Country" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // const [latestVideoUrl, setLatestVideoUrl] = useState(
  //   "https://www.youtube.com/embed/akyu9pSbArY"
  // );
  // Initialize state with the first video link from your data
  const [latestVideoUrl, setLatestVideoUrl] = useState(
    videonewslatest[0].videolink
  );
  const [seriesVideoUrl, setSeriesVideoUrl] = useState(
    videonewslatest[0].videolink
  );
  const [tournamentVideoUrl, setTournamentVideoUrl] = useState(
    videonewslatest[0].videolink
  );
  const [countryVideoUrl, setCountryVideoUrl] = useState(
    videonewslatest[0].videolink
  );
  const changeTab = (tabId) => {
    setActiveTab(tabId);
  };

  const handleVideoClick = (videoLink) => {
    // Update the video link based on the active tab
    switch (activeTab) {
      case "latestvideo":
        if (latestVideoUrl !== videoLink) {
          setLatestVideoUrl(videoLink);
        }
        break;
      case "seriesvideo":
        if (seriesVideoUrl !== videoLink) {
          setSeriesVideoUrl(videoLink);
        }
        break;
      case "tournamentvideo":
        if (tournamentVideoUrl !== videoLink) {
          setTournamentVideoUrl(videoLink);
        }
        break;
      case "countryvideo":
        if (countryVideoUrl !== videoLink) {
          setCountryVideoUrl(videoLink);
        }
        break;
      default:
        break;
    }
  };

  // State to control the visibility of the share icons
  const [showShareIcons, setShowShareIcons] = useState(false);

  // Function to toggle the visibility of share icons
  const toggleShareIcons = () => {
    setShowShareIcons(!showShareIcons);
  };
  return (
    <>
      <NextSeo
        title={`News | Cricket Chautari`}
        description={`News | Cricket Chautari`}
      />
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
      {/* latest news start */}
      <div
        id="latestvideo"
        className={`flex flex-col ${
          activeTab === "latestvideo" ? "block" : "hidden"
        }`}
      >
        {/* Iframe video from tab below */}

        <iframe
          className="pt-8  w-full md:h-72 lg:h-96  "
          src={latestVideoUrl}
          title="cricketcup"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;web-share"
          allowFullScreen=""
        ></iframe>
        <div className="ctr">
          {/* social media share  */}
          <div class="mt-8 ">
            <div className="flex justify-end items-center">
              <button
                className="bg-white py-3 px-4 font-medium cursor-pointer text-xl rounded-full flex items-end"
                onClick={toggleShareIcons}
              >
                <img
                  src="/share.png" // Replace with your share icon image
                  alt="Share Icon"
                  className="w-6 h-6 mr-2"
                />
                <span className="sr-only">Share</span>
                {showShareIcons ? "" : ""}
              </button>
            </div>
            <ul className="pl-4 flex  flex-wrap lg:flex justify-center items-center ">
              {/* Share icons with dynamic visibility based on state */}
              {showShareIcons && (
                <>
                  <li className=" text-white bg-[#E4E6F0] hover:bg-cc-primary py-3 px-12 font-medium cursor-pointer text-xl">
                    <FacebookShareButton url={latestVideoUrl}>
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </li>
                  <li className="text-[#25252599] bg-[#E4E6F0] hover:bg-cc-primary hover:text-white py-3 px-12 font-medium cursor-pointer text-xl">
                    <WhatsappShareButton url={latestVideoUrl}>
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </li>
                  <li className="text-[#25252599] bg-[#E4E6F0] hover:bg-cc-primary hover:text-white py-3 px-12 font-medium cursor-pointer text-xl">
                    <InstapaperShareButton url={latestVideoUrl}>
                      <InstagramIcon size={32} round />
                    </InstapaperShareButton>
                  </li>
                  <li className="text-[#25252599] bg-[#E4E6F0] hover:bg-cc-primary hover:text-white py-3 px-12 font-medium cursor-pointer text-xl">
                    <TwitterShareButton url={latestVideoUrl}>
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  </li>
                </>
              )}
            </ul>
          </div>
          
          <div className="sm:flex-col md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
            {videonewslatest.map((data, index) => (
              <VideosCard
                key={index}
                info={data}
                onVideoClick={() => handleVideoClick(data.videolink)}
              />
            ))}
          </div>
        </div>
         </div>
        {/* end latest videos */}
        {/* series news start */}
        <div
          id="seriesvideo"
          className={`flex flex-col ${
            activeTab === "seriesvideo" ? "block" : "hidden"
          }`}
        >
          {/* Iframe video from tab below */}
          <iframe
            className="pt-8 w-full md:h-72 lg:h-96 "
            src={seriesVideoUrl}
            title="cricketcup"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          ></iframe>
          <div className="flex justify-end items-center">
            <button
              className="bg-white py-3 px-4 font-medium cursor-pointer text-xl rounded-full flex items-end"
              onClick={toggleShareIcons}
            >
              <img
                src="/share.png" // Replace with your share icon image
                alt="Share Icon"
                className="w-6 h-6 mr-2"
              />
              <span className="sr-only">Share</span>
              {showShareIcons ? "" : ""}
            </button>
          </div>
          {/* social media share  */}
          <div className="ctr">
          <div class="mt-8">
            <ul className="pl-4 flex  flex-wrap lg:flex justify-center items-center ">
              {/* Share icons with dynamic visibility based on state */}
              {showShareIcons && (
                <>
                  <li class="text-white bg-[#E4E6F0]  hover:bg-cc-primary py-3 px-12 font-medium cursor-pointer text-xl rounded-l-lg">
                    <FacebookShareButton url={latestVideoUrl}>
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </li>
                  <li class="text-[#25252599] bg-[#E4E6F0] hover:bg-cc-primary hover:text-white py-3 px-12 font-medium cursor-pointer text-xl ">
                    <WhatsappShareButton url={latestVideoUrl}>
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </li>
                  <li class="text-[#25252599] bg-[#E4E6F0] hover:bg-cc-primary hover:text-white py-3 px-12 font-medium cursor-pointer text-xl ">
                    <InstapaperShareButton url={latestVideoUrl}>
                      <InstagramIcon size={32} round />
                    </InstapaperShareButton>
                  </li>
                  <li class="text-[#25252599] bg-[#E4E6F0] hover:bg-cc-primary hover:text-white py-3 px-12 font-medium cursor-pointer text-xl ">
                    <TwitterShareButton url={latestVideoUrl}>
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="sm:flex-col md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
            {videonewslatest.map((data, index) => (
              <VideosCard
                key={index}
                info={data}
                onVideoClick={() => handleVideoClick(data.videolink)}
              />
            ))}
          </div>
        </div>
        </div>
        {/* end of series tab */}

        {/* tournament news start */}
        <div
          id="tournamentvideo"
          className={`flex flex-col ${
            activeTab === "tournamentvideo" ? "block" : "hidden"
          }`}
        >
          {/* Iframe video from tab below */}
          <iframe
            className="pt-8 w-full md:h-72 lg:h-96  "
            src={tournamentVideoUrl}
            title="cricketcup"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          ></iframe>
          <div className="flex justify-end items-center">
            <button
              className="bg-white py-3 px-4 font-medium cursor-pointer text-xl rounded-full flex items-end"
              onClick={toggleShareIcons}
            >
              <img
                src="/share.png" // Replace with your share icon image
                alt="Share Icon"
                className="w-6 h-6 mr-2"
              />
              <span className="sr-only">Share</span>
              {showShareIcons ? "" : ""}
            </button>
          </div>
          {/* social media share  */}
           <div className="ctr">
          <div class="mt-8">
            <ul className="pl-4 flex  flex-wrap lg:flex justify-center items-center ">
              {/* Share icons with dynamic visibility based on state */}
              {showShareIcons && (
                <>
                  <li class="text-white bg-[#E4E6F0]  hover:bg-cc-primary  py-3 px-12 font-medium cursor-pointer text-xl rounded-l-lg">
                    <FacebookShareButton url={latestVideoUrl}>
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </li>
                  <li class="text-[#25252599] bg-[#E4E6F0] hover:bg-cc-primary hover:text-white py-3 px-12 font-medium cursor-pointer text-xl ">
                    <WhatsappShareButton url={latestVideoUrl}>
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </li>
                  <li class="text-[#25252599] bg-[#E4E6F0] hover:bg-cc-primary hover:text-white py-3 px-12 font-medium cursor-pointer text-xl ">
                    <InstapaperShareButton url={latestVideoUrl}>
                      <InstagramIcon size={32} round />
                    </InstapaperShareButton>
                  </li>
                  <li class="text-[#25252599] bg-[#E4E6F0] hover:bg-cc-primary hover:text-white py-3 px-12 font-medium cursor-pointer text-xl ">
                    <TwitterShareButton url={latestVideoUrl}>
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="sm:flex-col md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
            {videonewslatest.map((data, index) => (
              <VideosCard
                key={index}
                info={data}
                onVideoClick={() => handleVideoClick(data.videolink)}
              />
            ))}
          </div>
        </div>
        </div>
        {/* end of tournament tab */}
        {/* country video news start */}
        <div
          id="countryvideo"
          className={`flex flex-col ${
            activeTab === "countryvideo" ? "block" : "hidden"
          }`}
        >
          {/* Iframe video from tab below */}
          <iframe
            className="pt-8 w-full md:h-72 lg:h-96 "
            src={countryVideoUrl}
            title="cricketcup"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          ></iframe>
          <div className="flex justify-end items-center">
            <button
              className="bg-white py-3 px-4 font-medium cursor-pointer text-xl rounded-full flex items-end"
              onClick={toggleShareIcons}
            >
              <img
                src="/share.png" // Replace with your share icon image
                alt="Share Icon"
                className="w-6 h-6 mr-2"
              />
              <span className="sr-only">Share</span>
              {showShareIcons ? "" : ""}
            </button>
          </div>
          {/* social media share  */}
          <div className="ctr">
          <div class="mt-8">
            <ul className="pl-4 flex  flex-wrap lg:flex justify-center items-center ">
              {/* Share icons with dynamic visibility based on state */}
              {showShareIcons && (
                <>
                  <li class="text-white bg-[#E4E6F0]  hover:bg-cc-primary  py-3 px-12 font-medium cursor-pointer text-xl rounded-l-lg">
                    <FacebookShareButton url={latestVideoUrl}>
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </li>
                  <li class="text-[#25252599] bg-[#E4E6F0] hover:bg-cc-primary hover:text-white py-3 px-12 font-medium cursor-pointer text-xl ">
                    <WhatsappShareButton url={latestVideoUrl}>
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </li>
                  <li class="text-[#25252599] bg-[#E4E6F0] hover:bg-cc-primary hover:text-white py-3 px-12 font-medium cursor-pointer text-xl ">
                    <InstapaperShareButton url={latestVideoUrl}>
                      <InstagramIcon size={32} round />
                    </InstapaperShareButton>
                  </li>
                  <li class="text-[#25252599] bg-[#E4E6F0] hover:bg-cc-primary hover:text-white py-3 px-12 font-medium cursor-pointer text-xl ">
                    <TwitterShareButton url={latestVideoUrl}>
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="sm:flex-col md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
            {videonewslatest.map((data, index) => (
              <VideosCard
                key={index}
                info={data}
                onVideoClick={() => handleVideoClick(data.videolink)}
              />
            ))}
          </div>
        </div>
        </div>
        {/* end of country tab */}
     
    </>
  );
};

export default Videos;
