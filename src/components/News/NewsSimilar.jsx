import React from 'react'

const NewsSimilar = ({ slidersingleNewsData }) => {


    return (
        <>
            {/* <div className="flex"> */}

                <div className="mr-4 flex flex-col  bg-[#F1F1F1] w-[305px]  rounded-lg">

                    <img src={slidersingleNewsData.image} className=" rounded-lg  w-[310px]" height={197} />
                    <div className="mt-0  ">
                        <h2 className="mt-2 font-siluguri text-sm/[22.64px]  text-[#252525] pb-1 text-justify " >{slidersingleNewsData.title}</h2>
                        <p className="font-medium">{slidersingleNewsData.description}</p>
                        <p className="text-[#252525B8]">{slidersingleNewsData.date}</p>
                    </div>

                </div>

            {/* </div> */}
        </>
    )
}

export default NewsSimilar