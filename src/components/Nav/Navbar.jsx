import React, { useState } from "react"
import Link from "next/link"
import SecondaryNav from "@/components/Nav/SecondaryNav"
import Logo from "@/components/UI/Logo"
import Search from "@/components/Icons/Search"
import { useRouter } from 'next/router';


const Navbar = () => {

    const [hideSearchBox, setHideSearchBox] = useState(true)

    return (
        <>
            <header className="bg-[#F2F2F2]">
                <nav className="ctr flex justify-between items-center">
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <ul className={`text-base font-medium text-cc-primary uppercase flex items-center ${hideSearchBox ? 'space-x-14' : 'space-x-5'}`}>
                            {
                                hideSearchBox ? (
                                    <>

                                        <li className="hidden lg:inline-block">
                                            <Link href={`/news`} >News</Link>
                                        </li>
                                        <li className="hidden lg:inline-block">
                                            <Link href={`/videos`} >Videos</Link>
                                        </li>
                                        <li className="hidden">
                                            <button type="button" className="px-4 py-2 font-normal text-white uppercase bg-cc-primary rounded-lg hover:bg-cc-secondary">Sign In</button>
                                        </li>
                                        <li className="cursor-pointer hidden md:inline-block" onClick={() => { setHideSearchBox(!hideSearchBox) }}>

                                            <img src={`/search.svg`} alt="Search Icon" />

                                          

                                        </li>
                                    </>
                                )
                                    : (
                                        <>
                                            <li className="flex relative">
                                                <input
                                                    type="text"
                                                    placeholder="Search for players, team, news, or video"
                                                    className="w-full min-w-[320px] px-4 py-1 text-base font-siluguri rounded-l-full focus:outline-none"
                                                />
                                                <img src={`/search-input-box.svg`} className="cursor-pointer" />
                                                <img src={`/cross.svg`} alt="Cross Icon" className="cursor-pointer" onClick={() => { setHideSearchBox(!hideSearchBox) }} />
                                            </li>
                                        </>
                                    )
                            }
                            <Search />
                        </ul>
                    </div>
                </nav>
            </header>

            <SecondaryNav />
        </>
    )
}

export default Navbar