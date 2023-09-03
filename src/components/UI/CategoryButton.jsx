import Link from 'next/link'
import React from 'react'

const CategoryButton = () => {
    return (
        <>
            <div className="my-5 flex justify-center items-center">
                <Link href={`/`}>
                    <button className="px-5 py-1 font-semibold text-2xl text-[#1d9391] border-[3px] border-[#1d9391] rounded-full shadow-lg">Tournament</button>
                </Link>
            </div>
        </>
    )
}

export default CategoryButton