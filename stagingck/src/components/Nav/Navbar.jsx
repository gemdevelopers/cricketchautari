import React from "react"
import Link from "next/link"
import SecondaryNav from "@/components/Nav/SecondaryNav"
import Logo from "@/components/UI/Logo"
import Search from "@/components/Icons/Search"
import Image from "next/image"

const Navbar = () => {
    return (
        <>
            <header className="bg-[#F2F2F2]">
                <nav className="ctr flex justify-between items-center">
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <ul className="text-base font-medium text-cc-primary uppercase flex items-center space-x-14">
                            <li>
                                <Link href={`/news`} >News</Link>
                            </li>
                            <li>
                                <Link href={`/videos`} >Videos</Link>
                            </li>
                            <li>
                                <button type="button" className="px-4 py-2 font-normal text-white uppercase bg-cc-primary rounded-lg">Sign In</button>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={`/search.svg`}  width={0}
  height={0} alt="Description of the image" />
                            </li>
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