import React, { useRef, useCallback, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import NewsSimilar from './NewsSimilar';
import {similarNewsShowData} from '@/components/DataNews/similarNewsData'
import Image from 'next/image';
const SliderSimilarSingleNews = () => {

    const sliderRef = useRef(null);

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, [])

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, [])

    const handleSlideChange = () => {
        if (sliderRef.current) {
            setCurrentSlideIndex(sliderRef.current.swiper.activeIndex);
        }
    }

  

    return (
        <>
            <div className="ctr py-8 relative">
               
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3.5}
                    spaceBetween={12}
                    ref={sliderRef}
                    onSlideChange={handleSlideChange}
                >
                    {
                        similarNewsShowData.map((data, index) => (
                            <SwiperSlide key={index}><NewsSimilar slidersingleNewsData={data} /></SwiperSlide>
                        ))
                    }
                </Swiper>
                {
                    currentSlideIndex !== 0 && (
                        <div onClick={handlePrev} className="bg-cc-primary p-3 pt-5 pb-5 text-white absolute left-4 md:left-8 top-[50%] z-10 -translate-y-[50%] cursor-pointer rounded-r-lg">
                            {/* <img src={`slider-arrow-next.svg`} className="transform scale-x-[-1]" /> */}
                            <Image src="/slider-arrow-next.svg" className="transform scale-x-[-1]" alt="Description of the image"/>
                        </div>
                    )
                }

                {
                    currentSlideIndex !== sliderRef.current?.swiper.slides.length - 3 && (
                        <div onClick={handleNext} className="bg-cc-primary p-3 pt-5 pb-5 text-white absolute right-4 md:right-8   z-10 -translate-y-[50%] cursor-pointer rounded-l-lg">
                            <Image src={`slider-arrow-next.svg`} alt="Description of the image"/>
                        </div>
                    )
                }
            </div>
           
        </>
    )

}

export default SliderSimilarSingleNews