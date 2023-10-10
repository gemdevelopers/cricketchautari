"use client"

import React from 'react'

const NewsTitleDate = ({ id, info }) => {
    return (
        <>
            <div className="mb-0.5 bg-[#dee0ec] rounded-b-lg py-4">
                <div className="flex">
                    {
                        id == 1 ? ''
                            :
                            <p className="px-4 font-medium">{id}</p>
                    }
                    <div className="px-4">
                        <p className="font-siluguri font-medium leading-5">{info.title}</p>
                        <p className="pt-1 text-[#252525B8]">{info.date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsTitleDate