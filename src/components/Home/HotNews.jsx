import React from 'react'
import Image from 'next/image'

const HotNews = () => {
    return (
        <div className="hot-news">
            <div className="px-5 flex gap-2">
                <img src={`/hot.svg`} alt="Hot News" />
                <h2 className="text-xl font-semibold">Hot News</h2>
            </div>
            <div className="p-4">
                <div>
                    <Image
                        src={`/hot-news.jpg`}
                        width="335"
                        height="195"
                        placeholder="blur"
                        blurDataURL="/cricket-chautari.svg"
                        className="w-full h-auto object-contain"
                        alt="Hot News"
                    />
                </div>
                <p className="my-5 font-siluguri font-normal">
                    <span className="px-3 py-1 text-[14px] rounded-lg bg-[#FBFBFB]">ICC Worldcup</span>
                </p>
                <h3 className="my-3 font-siluguri text-base font-semibold">Nepal ends Emerging Teams Asia Cup with a victory</h3>
            </div>
        </div>
    )
}

export default HotNews