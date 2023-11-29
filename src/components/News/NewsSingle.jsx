import Image from 'next/image'
import React from 'react'


const NewsSingle = ({single_news_data}) => {
    
    return (
        <>
            <div className="bg-[#EEEFF5]">
                <div className="flex flex-col">
                    <Image src={`/image-27.png`} height={259}   width ={620}className="transform transition-transform duration-500 hover:scale-105 bg-gradient-to-b from-transparent via-black to-black  " alt="Description of the image"/>
                    <div className="mt-4 px-1" >
                    <p
                            className="my-6 text-[#252525] font-siluguri font-normal text-lg  text-left tracking-normal"
                            dangerouslySetInnerHTML={{ __html: single_news_data.description }}>
                       </p>
                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsSingle