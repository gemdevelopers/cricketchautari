import React from 'react'
import Image from 'next/image'

const HomeSliderDetails = ({ silderData }) => {
    return (
        <>
            <div className="bg-[#DEE0EC] px-4 py-6 rounded-2xl drop-shadow-md">
                <p className={`font-bold tracking-wide text-xs lg:text-sm xl:text-base ${silderData?.statusColor}`}>{silderData?.status}</p>
                <p className="my-3 pb-2 font-medium text-[#252525B8] text-xs lg:text-sm xl:text-base">{silderData?.firstTitle}</p>

                <div className="mb-4 flex justify-between">
                    <div>
                        <div className="mb-2 flex gap-3">
                            <img src={`/india.svg`} alt="Flag" />
                            <p className="font-medium text-sm xl:text-base">India</p>
                        </div>
                        <div className="flex gap-3">
                            <img src={`/netherland.svg`} alt="Flag" />
                            <p className="font-medium text-sm xl:text-base">Netherland</p>
                        </div>
                    </div>
                    <div>
                        <p className="mb-[8px] font-medium text-right text-xs xl:text-base">(34/100 balls) <span className="font-bold">34/2</span></p>
                        {
                            (silderData?.stats) ?
                                <p className="font-medium text-right text-xs lg:text-base">{silderData?.stats}</p>
                                :
                                ''
                        }
                    </div>
                </div>
                <p className="font-medium text-[#252525B8] text-xs xl:text-base">{silderData?.secondTitle}</p>
            </div>
        </>
    )
}

export default HomeSliderDetails