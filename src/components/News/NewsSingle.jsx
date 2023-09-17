import React from 'react'


const NewsSingle = ({single_news_data}) => {
    
    return (
        <>
            <div className="bg-[#EEEFF5]">
                <div className="flex flex-col">
                    <img src={`/image-27.png`} className="bg-gradient-to-b from-transparent via-black to-black  " />
                    <div className="mt-4 px-1" >
                    <p
                            className="my-6 text-[#252525] font-siluguri font-normal text-lg  sm:text-5xl text-left tracking-normal"
                            dangerouslySetInnerHTML={{ __html: single_news_data.description }}>
                       </p>
                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsSingle