"use client"

import React from 'react'
import Image from 'next/image'
import NewsTitleDate from '@/components/Home/NewsTitleDate'

const TrendingNews = () => {
    const news = [
        {
            id: 1,
            title: "Nepal ends Emerging Teams Asia Cup with a victory",
            date: "Aug 09, 2023"
        },
        {
            id: 2,
            title: "Dipendra Singh Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
            date: "Jul 12, 2023"
        },
        {
            id: 3,
            title: "Nepal ends Emerging Teams Asia Cup with a victory",
            date: "Oct 25, 2023"
        },
        {
            id: 4,
            title: "Airees Montreal Tigers clinch GT20 Canada 2023 title",
            date: "Dec 20, 2023"
        }
    ]
    return (
        <>
            <div className="col-span-4 flex flex-col rounded-t-xl overflow-hidden">
                <div className="relative">
                    {/* <Image
                    src={`/trending-news.jpg`}
                    width="758"
                    height={}
                    /> */}
                    <Image src={`/trending-news.jpg`} width="775" height="495" alt="Description of the image"/>
                    <div className="absolute top-0 left-0 w-full h-[55px] bg-[#363636AB]"></div>
                    <div className="absolute top-0 left-2 px-3 py-3 text-white">
                        <h2 className="text-2xl font-semibold">Trending News</h2>
                    </div>
                    <div className="absolute top-20 left-6 px-3 py-px text-lg rounded-full text-black font-medium bg-gray-300">1</div>
                </div>

                {
                    news.map((data, index) => (
                        <NewsTitleDate key={index} id={index + 1} info={data} />
                    ))
                }

            </div>
        </>
    )
}

export default TrendingNews