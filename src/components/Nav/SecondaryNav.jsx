import Link from "next/link"
import React from "react"

const SecondaryNav = () => {
    return (
        <>
            <nav className="bg-cc-primary">
                <div className="ctr flex justify-between items-center">
                    <ul className="pl-4 text-white font-medium flex">
                        <li className="px-4 py-3 font-bold bg-[#157B5C]">
                            <Link href={`/`}>MATCHES</Link>
                        </li>
                        <li className="px-[12px] py-3">
                            <Link href={`/`}>WI vs IND - Preview</Link>
                        </li>
                        <li className="px-[12px] py-3">
                            <Link href={`/`}>NORW vs SOUW - Live</Link>
                        </li>
                        <li className="px-[12px] py-3">
                            <Link href={`/`}>SOU vs NORS - Preview</Link>
                        </li>
                        <li className="px-[12px] py-3">
                            <Link href={`/`}>SOUSJG vs MNT - Preview</Link>
                        </li>
                        <li className="px-[12px] py-3">
                            <Link href={`/`}>SJG vs MNT - Preview</Link>
                        </li>
                    </ul>
                    {/* <div className="relative">
                        <input type="text" className="px-2 py-1 text-center font-semibold rounded-full focus:outline-none" placeholder="Search" />
                        <img src="/search-icon.svg" className="absolute top-2 left-2" />
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default SecondaryNav