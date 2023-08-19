import React from 'react'
import Image from 'next/image'

const HomeSliderDetails = ({ silderData }) => {
    return (
        <>
            <div className="bg-[#DEE0EC] px-4 py-6 rounded-2xl drop-shadow-md">
                <p className={`font-bold tracking-wide ${silderData?.statusColor}`}>{silderData?.status}</p>
                <p className="my-3 pb-4 font-medium text-[#252525B8]">{silderData?.firstTitle}</p>

                <div className="mb-4 flex justify-between">
                    <div>
                        <div className="mb-2 flex gap-3">
                            <img src={`/india.svg`} />
                            <p className="font-medium">India</p>
                        </div>
                        <div className="flex gap-3">
                            <img src={`/netherland.svg`} />
                            <p className="font-medium">Netherland</p>
                        </div>
                    </div>
                    <div>
                        <p className="mb-[8px] font-medium text-right">(34/100 balls) <span className="font-bold">34/2</span></p>
                        {
                            (silderData?.stats) ?
                                <p className="font-medium text-right">{silderData?.stats}</p>
                                :
                                ''
                        }
                    </div>
                </div>
                <p className="font-medium text-[#252525B8]">{silderData?.secondTitle}</p>
            </div>
        </>
    )
}

export default HomeSliderDetails