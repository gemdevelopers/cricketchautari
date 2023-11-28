import Link from 'next/link'
import React from 'react'

const CategoryButton = () => {
    return (
        <>
            <div className="my-5 flex justify-center items-center">
                <Link href={`/`}>
                    <button className="px-5 py-1 font-semibold text-lg text-[#1d9391] border-[3px] border-[#1d9391] rounded-full shadow-lg lg:text-lg xl:text-2xl">Tournament</button>
                </Link>
            </div>
        </>
    )
}

export default CategoryButton