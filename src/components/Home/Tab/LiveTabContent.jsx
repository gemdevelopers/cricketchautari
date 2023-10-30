import React from 'react'

const LiveTabContent = () => {

    const silderDatas = [
        {
            status: "LIVE",
            statusColor: "text-[#C22424]",
            firstTitle: "2nd T20 India tour of Netherland",
            balls: "",
            stats: "",
            secondTitle: "Netherland chose to field"
        },
        {
            status: "Result",
            statusColor: "text-[#218B6B]",
            firstTitle: "2nd T20 Netherland tour of India",
            balls: "",
            stats: "137-6 (20)",
            secondTitle: "India won by 8 wkts"
        },
        {
            status: "Fixture",
            statusColor: "text-[#1670F5]",
            firstTitle: "2nd T20 India tour of Netherland",
            balls: "",
            stats: "137-6 (20)",
            secondTitle: "Netherland chose to field"
        },
        {
            status: "Result",
            statusColor: "text-[#218B6B]",
            firstTitle: "2nd T20 India tour of Netherland",
            balls: "",
            stats: "300-6 (5)",
            secondTitle: "Netherland chose to field"
        },
        {
            status: "LIVE",
            statusColor: "text-[#C22424]",
            firstTitle: "2nd T20 India tour of Netherland",
            balls: "",
            stats: "",
            secondTitle: "Netherland chose to field"
        },
        {
            status: "Fixture",
            statusColor: "text-[#1670F5]",
            firstTitle: "2nd T20 India tour of Netherland",
            balls: "",
            stats: "137-6 (20)",
            secondTitle: "India won by 8 wkts"
        }
    ]

    let count = 0;

    return (
        <>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2">

                {
                    silderDatas.map((data, index) => {
                        count++;
                        return (
                            <div key={index} className={`bg-[#DEE0EC] px-7 py-8 my-1 sm:my-0 ${(count % 2 != 0) ? 'border-r-0 sm:border-r-2 border-[#76767669]' : ''}`}>
                                <p className={`font-bold tracking-wide text-xs lg:text-sm xl:text-base ${data?.statusColor}`}>{data?.status}</p>
                                <p className="my-3 pb-2 font-medium text-[#252525B8] text-xs lg:text-sm xl:text-base">{data?.firstTitle}</p>

                                <div className="mb-4 flex justify-between">
                                    <div>
                                        <div className="mb-2 flex gap-3">
                                            <img src={`/india.svg`} />
                                            <p className="font-medium text-sm xl:text-base">India</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <img src={`/netherland.svg`} />
                                            <p className="font-medium text-sm xl:text-base">Netherland</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-[8px] font-medium text-right text-xs xl:text-base">(34/100 balls) <span className="font-bold">34/2</span></p>

                                        {
                                            (data?.stats) ?
                                                <p className="font-medium text-right text-xs lg:text-base">{data?.stats}</p>
                                                :
                                                ''
                                        }

                                    </div>
                                </div>
                                <p className="font-medium text-[#252525B8] text-xs xl:text-base">{data?.secondTitle}</p>

                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default LiveTabContent