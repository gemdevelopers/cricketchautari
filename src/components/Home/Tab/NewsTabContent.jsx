import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CategoryButton from '@/components/UI/CategoryButton'

const NewsTabContent = () => {

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
                        className='transform transition-transform duration-500 hover:scale-110 w-full h-auto object-contain'
                        placeholder="blur"
                        blurDataURL="/cricket-chautari.svg"
                        alt="Asia Cup 2023: Pakistan strongest XI"
                    />
                    <div className="px-4 sm:px-10 py-3 sm:py-6 absolute text-white bottom-0">
                        <h2 className="text-base sm:text-xl mb-2 font-siluguri font-semibold">Asia Cup 2023: Pakistan strongest XI</h2>
                        <p className="text-[#f4f4f4e6] text-sm font-normal text-justify hidden sm:inline-block lg:text-sm xl:text-base">
                            <span className="text-base font-semibold">Montreal Tigers</span> registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League Canada this year. Dipendra Singh Airee, who made his first-ever appearance in the international franchise league, achieved a sensational victory in the final
                        </p>
                        <p className="sm:mt-6 text-xs sm:text-sm md:text-base text-[#F0F0F0]">Aug 09, 2023</p>
                    </div>
                </div>

                {news.map((data, index) => (
                    <div className="mt-3 bg-[#DEE0EC] rounded-lg" key={index}>
                        <div className="pl-[10px] pt-[10px] pb-3 flex gap-4">
                            <div>
                                <Image
                                    src={`/champion-one.jpg`}
                                    alt={data.title}
                                    width="161"
                                    height="90"
                                    className='h-auto object-contain rounded-l-lg'
                                    placeholder="blur"
                                    blurDataURL="/cricket-chautari.svg"
                                />
                            </div>
                            <div className="sm:py-2 flex flex-col justify-between">
                                <Link href={'/'}>
                                    <h3 className="text-sm sm:text-base font-siluguri font-normal">{data.title}</h3>
                                </Link>
                                <p className="text-sm text-[#252525B8]">{data.date}</p>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="mt-3 py-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-[#DEE0EC] p-2 rounded-lg">
                        <div className="rounded-t-lg">
                            <img src={`/image-three.jpg`} alt="Image" />
                        </div>
                        <div className="mt-3">
                            <h3 className="font-siluguri text-sm font-medium lg:text-sm xl:text-base">Airee Montreal Tigers clinch GT20 Canada 2023 title</h3>
                            <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
                        </div>
                    </div>
                    <div className="bg-[#DEE0EC] p-2 rounded-lg">
                        <div className="rounded-t-lg">
                            <img src={`/image-three.jpg`} alt="Image" />
                        </div>
                        <div className="mt-3">
                            <h3 className="font-siluguri text-sm font-medium lg:text-sm xl:text-base">Airee Montreal Tigers clinch GT20 Canada 2023 title</h3>
                            <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
                        </div>
                    </div>
                    <div className="bg-[#DEE0EC] p-2 rounded-lg">
                        <div className="rounded-t-lg">
                            <img src={`/image-three.jpg`} alt="Image" />
                        </div>
                        <div className="mt-3">
                            <h3 className="font-siluguri text-sm font-medium lg:text-sm xl:text-base">Airee Montreal Tigers clinch GT20 Canada 2023 title</h3>
                            <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
                        </div>
                    </div>
                    <div className="bg-[#DEE0EC] p-2 rounded-lg">
                        <div className="rounded-t-lg">
                            <img src={`/image-three.jpg`} alt="Image" />
                        </div>
                        <div className="mt-3">
                            <h3 className="font-siluguri text-sm font-medium lg:text-sm xl:text-base">Airee Montreal Tigers clinch GT20 Canada 2023 title</h3>
                            <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="tab-content">
                <CategoryButton />
                <div className="relative overflow-hidden">
                    <Image
                        src={`/news-1.jpg`}
                        width="775"
                        height="495"
                        className='transform transition-transform duration-500 hover:scale-110 w-full h-auto object-contain'
                        placeholder="blur"
                        blurDataURL="/cricket-chautari.svg"
                        alt="Image"
                    />
                    <div className="px-4 sm:px-10 py-3 sm:py-6 absolute text-white bottom-0">
                        <h2 className="text-base sm:text-xl mb-2 font-siluguri font-semibold">Asia Cup 2023: Pakistan strongest XI</h2>
                        <p className="text-[#f4f4f4e6] text-sm font-normal text-justify hidden sm:inline-block lg:text-sm xl:text-base">
                            <span className="text-base font-semibold">Montreal Tigers</span> registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League Canada this year. Dipendra Singh Airee, who made his first-ever appearance in the international franchise league, achieved a sensational victory in the final
                        </p>
                        <p className="sm:mt-6 text-xs sm:text-sm md:text-base text-[#F0F0F0]">Aug 09, 2023</p>
                    </div>
                </div>

                {news.map((data, index) => (
                    <div className="mt-3 bg-[#DEE0EC] rounded-lg" key={index}>
                        <div className="pl-[10px] pt-[10px] pb-3 flex gap-4">
                            <div>
                                <Image
                                    src={`/champion-one.jpg`}
                                    alt={data.title}
                                    width="161"
                                    height="90"
                                    className='h-auto object-contain rounded-l-lg'
                                    placeholder="blur"
                                    blurDataURL="/cricket-chautari.svg"
                                />
                            </div>
                            <div className="sm:py-2 flex flex-col justify-between">
                                <Link href={'/'}>
                                    <h3 className="text-sm sm:text-base font-siluguri font-normal">{data.title}</h3>
                                </Link>
                                <p className="text-sm text-[#252525B8]">{data.date}</p>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="mt-3 py-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-[#DEE0EC] p-2 rounded-lg">
                        <div className="rounded-t-lg">
                            <img src={`/image-three.jpg`} alt="Image" />
                        </div>
                        <div className="mt-3">
                            <h3 className="font-siluguri text-sm font-medium lg:text-sm xl:text-base">Airee Montreal Tigers clinch GT20 Canada 2023 title</h3>
                            <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
                        </div>
                    </div>
                    <div className="bg-[#DEE0EC] p-2 rounded-lg">
                        <div className="rounded-t-lg">
                            <img src={`/image-three.jpg`} alt="Image" />
                        </div>
                        <div className="mt-3">
                            <h3 className="font-siluguri text-sm font-medium lg:text-sm xl:text-base">Airee Montreal Tigers clinch GT20 Canada 2023 title</h3>
                            <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
                        </div>
                    </div>
                    <div className="bg-[#DEE0EC] p-2 rounded-lg">
                        <div className="rounded-t-lg">
                            <img src={`/image-three.jpg`} alt="Image" />
                        </div>
                        <div className="mt-3">
                            <h3 className="font-siluguri text-sm font-medium lg:text-sm xl:text-base">Airee Montreal Tigers clinch GT20 Canada 2023 title</h3>
                            <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
                        </div>
                    </div>
                    <div className="bg-[#DEE0EC] p-2 rounded-lg">
                        <div className="rounded-t-lg">
                            <img src={`/image-three.jpg`} alt="Image" />
                        </div>
                        <div className="mt-3">
                            <h3 className="font-siluguri text-sm font-medium lg:text-sm xl:text-base">Airee Montreal Tigers clinch GT20 Canada 2023 title</h3>
                            <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="tab-content">
                <CategoryButton />
                <div className="relative overflow-hidden">
                    <Image
                        src={`/news-1.jpg`}
                        width="775"
                        height="495"
                        className='transform transition-transform duration-500 hover:scale-110 w-full h-auto object-contain'
                        placeholder="blur"
                        blurDataURL="/cricket-chautari.svg"
                        alt="Asia Cup 2023: Pakistan's strongest XI"
                    />
                    <div className="px-4 sm:px-10 py-3 sm:py-6 absolute text-white bottom-0">
                        <h2 className="text-base sm:text-xl mb-2 font-siluguri font-semibold">Asia Cup 2023: Pakistan strongest XI</h2>
                        <p className="text-[#f4f4f4e6] text-sm font-normal text-justify hidden sm:inline-block lg:text-sm xl:text-base">
                            <span className="text-base font-semibold">Montreal Tigers</span> registered a five-wicket win over Surray Jaguars to clinch the title of Global T20 League Canada this year. Dipendra Singh Airee, who made his first-ever appearance in the international franchise league, achieved a sensational victory in the final
                        </p>
                        <p className="sm:mt-6 text-xs sm:text-sm md:text-base text-[#F0F0F0]">Aug 09, 2023</p>
                    </div>
                </div>

                {news.map((data, index) => (
                    <div className="mt-3 bg-[#DEE0EC] rounded-lg" key={index}>
                        <div className="pl-[10px] pt-[10px] pb-3 flex gap-4">
                            <div>
                                <Image
                                    src={`/champion-one.jpg`}
                                    alt={data.title}
                                    width="161"
                                    height="90"
                                    className='h-auto object-contain rounded-l-lg'
                                    placeholder="blur"
                                    blurDataURL="/cricket-chautari.svg"
                                />
                            </div>
                            <div className="sm:py-2 flex flex-col justify-between">
                                <Link href={'/'}>
                                    <h3 className="text-sm sm:text-base font-siluguri font-normal">{data.title}</h3>
                                </Link>
                                <p className="text-sm text-[#252525B8]">{data.date}</p>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="mt-3 py-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-[#DEE0EC] p-2 rounded-lg">
                        <div className="rounded-t-lg">
                            <img src={`/image-three.jpg`} alt="Image" />
                        </div>
                        <div className="mt-3">
                            <h3 className="font-siluguri text-sm font-medium lg:text-sm xl:text-base">Airee Montreal Tigers clinch GT20 Canada 2023 title</h3>
                            <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
                        </div>
                    </div>
                    <div className="bg-[#DEE0EC] p-2 rounded-lg">
                        <div className="rounded-t-lg">
                            <img src={`/image-three.jpg`} alt="Image" />
                        </div>
                        <div className="mt-3">
                            <h3 className="font-siluguri text-sm font-medium lg:text-sm xl:text-base">Airee Montreal Tigers clinch GT20 Canada 2023 title</h3>
                            <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
                        </div>
                    </div>
                    <div className="bg-[#DEE0EC] p-2 rounded-lg">
                        <div className="rounded-t-lg">
                            <img src={`/image-three.jpg`} alt="Image" />
                        </div>
                        <div className="mt-3">
                            <h3 className="font-siluguri text-sm font-medium lg:text-sm xl:text-base">Airee Montreal Tigers clinch GT20 Canada 2023 title</h3>
                            <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
                        </div>
                    </div>
                    <div className="bg-[#DEE0EC] p-2 rounded-lg">
                        <div className="rounded-t-lg">
                            <img src={`/image-three.jpg`} alt="Image" />
                        </div>
                        <div className="mt-3">
                            <h3 className="font-siluguri text-sm font-medium lg:text-sm xl:text-base">Airee Montreal Tigers clinch GT20 Canada 2023 title</h3>
                            <p className="pt-3 text-sm font-normal text-[#252525B8]">Aug 06, 2023</p>
                        </div>
                    </div>
                </div>

            </div>






        </>
    )
}

export default NewsTabContent