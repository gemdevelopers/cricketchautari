import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import NewsTitleDate from '@/components/Home/NewsTitleDate'
import HotNews from '@/components/Home/HotNews';

import 'swiper/css';
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';

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
            title: "Airee’s Montreal Tigers clinch GT20 Canada 2023 title",
            date: "Dec 20, 2023"
        }
    ]
    return (
        <>
            <div className="sticky top-1 flex flex-col h-[calc(100vh-0px)] overflow-auto col-span-4 rounded-t-lg" id="hot-news-slider">
                {/* <div className="col-span-4 flex flex-col rounded-t-xl overflow-hidden" style={{ position: 'sticky', top: '8px', height: 'calc(100vh - 100px)', overflow: 'auto' }}> */}
                {/* Your sticky content */}

                <div className="mb-7 py-6 bg-[#DEE0EC] rounded-lg">
                    <Swiper
                        scrollbar={{
                            hide: false,
                        }}
                        centeredSlides={true}
                        modules={[Scrollbar]}
                        className="custom-scroll-swiper"
                    >
                        <SwiperSlide><HotNews /> </SwiperSlide>
                        <SwiperSlide><HotNews /> </SwiperSlide>
                        <SwiperSlide><HotNews /> </SwiperSlide>
                        <SwiperSlide><HotNews /> </SwiperSlide>
                        <SwiperSlide><HotNews /> </SwiperSlide>
                        <SwiperSlide><HotNews /> </SwiperSlide>
                    </Swiper>
                </div>

                <div className="relative">
                    <Image
                        src={`/trending-news.jpg`}
                        width="379"
                        height="343"
                        placeholder="blur"
                        blurDataURL="/cricket-chautari.svg"
                        className="w-full h-auto object-contain rounded-t-md"
                        alt="Trending News"
                    />
                    <div className="absolute top-0 left-0 w-full h-[55px] bg-[#363636AB] rounded-t-md"></div>
                    <div className="absolute top-0 left-2 px-3 py-3 text-white">
                        <h2 className="text-2xl font-semibold">Trending News</h2>
                    </div>
                    <div className="absolute left-6 px-3 py-px top-20 bg-gray-300 font-medium rounded-full text-black text-lg">1</div>
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