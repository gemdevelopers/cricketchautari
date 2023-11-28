import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SeriesVideos = ({infoseries}) => {
  return (
   <>
     <div className="mt-4 bg-[#EEEFF5] rounded-lg p-2 mr-4 ">
        {/* 1 */}
        <div className="bg-[#DEE0EC] p-2 rounded-lg">
          <div className=" transform transition-transform duration-500 hover:scale-110 rounded-t-lg">
            <Image src="/news-champ.jpg" height={743} width={444} alt="Image" />
          </div>
          <div className="mt-3">
            <Link href={`infoseries.videolink`}>
              <h3 className="font-siluguri text-base font-medium cursor-pointer">
                {infoseries.title}
              </h3>
            </Link>
            <p className="pt-3 text-sm font-normal text-[#252525B8]">
              {infoseries.date}
            </p>
          </div>
        </div>
      </div>
   </>
  )
}

export default SeriesVideos