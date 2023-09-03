import React, { useState } from 'react'
import NewsTabContent from '@/components/Home/Tab/NewsTabContent'
import VideosTabContent from '@/components/Home/Tab/VideosTabContent'
import TeamsTabContent from '@/components/Home/Tab/TeamsTabContent'
import LiveTabContent from '@/components/Home/Tab/LiveTabContent'

const TabContents = () => {
    const [isHovered, setIsHovered] = useState(false)
    const [tabSlug, setTabSlug] = useState('videos')
    const handleMouseHover = (slug) => {
        setIsHovered(true)
        switch (slug) {
            case 'news':
                document.getElementById('newsIcon').src = 'news-icon-hover.svg'
                break
            case 'videos':
                document.getElementById('videoIcon').src = 'videos-icon-hover.svg'
                break
            case 'teams':
                document.getElementById('teamIcon').src = 'team-icon.svg'
                break
            case 'live':
                document.getElementById('liveIcon').src = 'live-icon-hover.svg'
                break
            default:
                ''
        }

    }

    const handleMouseLeave = (slug) => {
        setIsHovered(false)
        switch (slug) {
            case 'news':
                document.getElementById('newsIcon').src = 'news-icon-hover.svg'
                break
            case 'videos':
                document.getElementById('videoIcon').src = 'videos-icon.svg'
                break
            case 'teams':
                document.getElementById('teamIcon').src = 'team-icon.svg'
                break
            case 'live':
                document.getElementById('liveIcon').src = 'live-icon.svg'
                break
            default:
                ''
        }
    }

    const onClickTabHandle = (tSlug) => {
        setTabSlug(tSlug)
    }

    return (
        <>
            <div className="col-span-8 ">
                <ul className="flex justify-center">
                    <li
                        className={`px-12 py-3 font-medium cursor-pointer rounded-l-lg flex gap-2
                        ${tabSlug === 'news' ? ' text-white bg-cc-primary' : ' text-cc-primary bg-[#e4e6f0] hover:bg-cc-primary hover:text-white'}`}
                        // onMouseEnter={() => handleMouseHover('news')}
                        // onMouseLeave={() => handleMouseLeave('news')}
                        onClick={() => setTabSlug('news')}
                    >
                        <img src={`news-icon.svg`} id="newsIcon" />
                        <p>News</p>
                    </li>
                    <li
                        className={`px-12 py-3 font-medium cursor-pointer flex gap-2
                        ${tabSlug === 'videos' ? ' text-white bg-cc-primary' : ' text-cc-primary bg-[#e4e6f0] hover:bg-cc-primary hover:text-white'}`}

                        // onMouseEnter={() => handleMouseHover('videos')}
                        // onMouseLeave={() => handleMouseLeave('videos')}
                        onClick={() => setTabSlug('videos')}
                    >
                        <img src={`videos-icon.svg`} id="videoIcon" />
                        <p>Videos</p>
                    </li>
                    <li
                        className={`px-12 py-3 font-medium cursor-pointer flex gap-2
                        ${tabSlug === 'teams' ? ' text-white bg-cc-primary' : ' text-cc-primary bg-[#e4e6f0] hover:bg-cc-primary hover:text-white'}`}
                        // onMouseEnter={() => handleMouseHover('teams')}
                        // onMouseLeave={() => handleMouseLeave('teams')}
                        onClick={() => setTabSlug('teams')}
                    >
                        <img src={`team-icon.svg`} id="teamIcon" />
                        <p>Teams</p>
                    </li>
                    <li
                        className={`px-12 py-3  font-medium cursor-pointer rounded-r-lg flex gap-2
                        ${tabSlug === 'live' ? ' text-white bg-cc-primary' : ' text-cc-primary bg-[#e4e6f0] hover:bg-cc-primary hover:text-white'}`}
                        // onMouseEnter={() => handleMouseHover('live')}
                        // onMouseLeave={() => handleMouseLeave('live')}
                        onClick={() => setTabSlug('live')}
                    >
                        <img src={`live-icon.svg`} id="liveIcon" />
                        <p>Live Scores</p>
                    </li>
                </ul>
                {
                    tabSlug === 'news' ? (<NewsTabContent />)
                        : tabSlug === 'videos' ? (<VideosTabContent />)
                            : tabSlug === 'teams' ? (<TeamsTabContent />)
                                : tabSlug === 'live' ? (<LiveTabContent />)
                                    : ''
                }
            </div>
        </>
    )
}

export default TabContents