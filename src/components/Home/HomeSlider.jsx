import React, { useRef, useCallback, useState } from 'react'
import HomeSliderDetails from '@/components/Home/HomeSliderDetails'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const HomeSlider = () => {

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

    const silderDatas = [
        {
            status: "LIVE",
            statusColor: "text-[#C22424]",
            firstTitle: "2nd T20 India tour of Netherland",
            balls: "",
            stats: "",
            secondTitle: "Netherland chose to field"
        },
        {
            status: "Result",
            statusColor: "text-[#218B6B]",
            firstTitle: "2nd T20 Netherland tour of India",
            balls: "",
            stats: "137-6 (20)",
            secondTitle: "India won by 8 wkts"
        },
        {
            status: "Fixture",
            statusColor: "text-[#1670F5]",
            firstTitle: "2nd T20 India tour of Netherland",
            balls: "",
            stats: "137-6 (20)",
            secondTitle: "Netherland chose to field"
        },
        {
            status: "Result",
            statusColor: "text-[#218B6B]",
            firstTitle: "2nd T20 India tour of Netherland",
            balls: "",
            stats: "300-6 (5)",
            secondTitle: "Netherland chose to field"
        },
        {
            status: "LIVE",
            statusColor: "text-[#C22424]",
            firstTitle: "2nd T20 India tour of Netherland",
            balls: "",
            stats: "",
            secondTitle: "Netherland chose to field"
        },
        {
            status: "Fixture",
            statusColor: "text-[#1670F5]",
            firstTitle: "2nd T20 India tour of Netherland",
            balls: "",
            stats: "137-6 (20)",
            secondTitle: "India won by 8 wkts"
        }
    ]

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
                        silderDatas.map((data, index) => (
                            <SwiperSlide key={index}><HomeSliderDetails silderData={data} /></SwiperSlide>
                        ))
                    }
                </Swiper>
                {
                    currentSlideIndex !== 0 && (
                        <div onClick={handlePrev} className="bg-cc-primary p-3 pt-5 pb-5 text-white absolute left-4 md:left-8 top-[50%] z-10 -translate-y-[50%] cursor-pointer rounded-r-lg">
                            <img src={`slider-arrow-next.svg`} className="transform scale-x-[-1]" />
                        </div>
                    )
                }

                {
                    currentSlideIndex !== sliderRef.current?.swiper.slides.length - 3 && (
                        <div onClick={handleNext} className="bg-cc-primary p-3 pt-5 pb-5 text-white absolute right-4 md:right-8 top-[50%] z-10 -translate-y-[50%] cursor-pointer rounded-l-lg">
                            <img src={`slider-arrow-next.svg`} />
                        </div>
                    )
                }
            </div>
        </>
    )

}

export default HomeSlider