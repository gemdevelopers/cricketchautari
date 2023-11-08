import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CategoryButton from '@/components/UI/CategoryButton'

const VideosTabContent = () => {
    const news = [
        {
            title: "Asia Cup 2023: Pakistan strongest XI",
            date: "Oct 10, 2022"
        },
        {
            title: "Airee Montreal Tigers clinch GT20 Canada 2023 title",
            date: "Jan 25, 2023"
        }
    ]
    return (
        <>

            <div className="tab-content">
                <CategoryButton />
                <div className="relative overflow-hidden">
                    <Image
                        src={`/news-1.jpg`}
                        width="775"
                        height="495"
                        className='w-full h-auto object-contain rounded-br-lg'
                        placeholder="blur"
                        blurDataURL="/cricket-chautari.svg"
                    />
                    <div className="px-4 sm:px-12 py-2 sm:py-6 absolute text-white bottom-0">
                        <h2 className="text-base sm:text-xl mb-2 font-siluguri font-semibold">Asia Cup 2023: Pakistan strongest XI</h2>
                        <p className="sm:mt-6">Aug 09, 2023</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                        <img src={`/play-icon.svg`} />
                    </div>
                    <div className="absolute right-0 bottom-0 px-2 py-1 font-semibold flex gap-2 items-center bg-[#DEE0EC] rounded-br-lg">
                        <div className="">
                            <img src={`/clock-icon.svg`} />
                        </div>
                        <p className="text-sm">02 : 40</p>
                    </div>
                </div>

                {news.map((data, index) => (
                    <div className="mt-3 bg-[#DEE0EC] rounded-lg" key={index}>
                        <div className="pl-[10px] pt-[10px] pb-3 flex gap-4">
                            <div className="relative">
                                <Image
                                    src={`/champion-one.jpg`}
                                    alt={data.title}
                                    width="161"
                                    height="90"
                                    className='h-auto object-contain rounded-l-lg'
                                    placeholder="blur"
                                    blurDataURL="/cricket-chautari.svg"
                                />
                                <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                                    <img src={`/row-play-icon.svg`} />
                                </div>
                                <div className="absolute right-0 bottom-0 font-semibold px-1 py-[0.5px] flex gap-1 items-center bg-[#FFFFFFCC]">
                                    <div className="">
                                        <img src={`/clock-icon.svg`} />
                                    </div>
                                    <p className="text-xs">02 : 40</p>
                                </div>
                            </div>
                            <div className="py-2 flex flex-col justify-between">
                                <Link href={'/'}>
                                    <h3 className="text-base font-siluguri font-normal">{data.title}</h3>
                                </Link>
                                <p className="text-sm text-[#252525B8]">{data.date}</p>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="mt-3 py-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-[#DEE0EC] p-2 rounded-lg">
                        <div className="relative rounded-t-lg">
                            <img src={`/image-three.jpg`} alt="Image" />
                            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                                <img src={`/row-play-icon.svg`} />
                            </div>
                            <div className="absolute right-0 bottom-0 font-semibold px-1 py-[0.5px] flex gap-1 items-center bg-[#FFFFFFCC]">
                                <div className="">
                                    <img src={`/clock-icon.svg`} />
                                </div>
                                <p className="text-xs">02 : 40</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h3 className="font-siluguri text-base font-medium">Airee Montreal Tigers clinch GT20 Canada 2023 title</h3>
                            <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
                        </div>
                    </div>
                    <div className="bg-[#DEE0EC] p-2 rounded-lg">
                        <div className="relative rounded-t-lg">
                            <img src={`/image-three.jpg`} alt="Image" />
                            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                                <img src={`/row-play-icon.svg`} />
                            </div>
                            <div className="absolute right-0 bottom-0 font-semibold px-1 py-[0.5px] flex gap-1 items-center bg-[#FFFFFFCC]">
                                <div className="">
                                    <img src={`/clock-icon.svg`} />
                                </div>
                                <p className="text-xs">02 : 40</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h3 className="font-siluguri text-base font-medium">Airee  Montreal Tigers clinch GT20 Canada 2023 title</h3>
                            <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
                        </div>
                    </div>
                    <div className="bg-[#DEE0EC] p-2 rounded-lg">
                        <div className="relative rounded-t-lg">
                            <img src={`/image-three.jpg`} alt="Image" />
                            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                                <img src={`/row-play-icon.svg`} />
                            </div>
                            <div className="absolute right-0 bottom-0 font-semibold px-1 py-[0.5px] flex gap-1 items-center bg-[#FFFFFFCC]">
                                <div className="">
                                    <img src={`/clock-icon.svg`} />
                                </div>
                                <p className="text-xs">02 : 40</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h3 className="font-siluguri text-base font-medium">Airee  Montreal Tigers clinch GT20 Canada 2023 title</h3>
                            <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
                        </div>
                    </div>
                    <div className="bg-[#DEE0EC] p-2 rounded-lg">
                        <div className="relative rounded-t-lg">
                            <img src={`/image-three.jpg`} alt="Image" />
                            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                                <img src={`/row-play-icon.svg`} />
                            </div>
                            <div className="absolute right-0 bottom-0 font-semibold px-1 py-[0.5px] flex gap-1 items-center bg-[#FFFFFFCC]">
                                <div className="">
                                    <img src={`/clock-icon.svg`} />
                                </div>
                                <p className="text-xs">02 : 40</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h3 className="font-siluguri text-base font-medium">Airee  Montreal Tigers clinch GT20 Canada 2023 title</h3>
                            <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default VideosTabContent