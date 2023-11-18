import Link from "next/link"
import React from "react"

const SecondaryNav = () => {
    return (
        <>
            <nav className="bg-cc-primary">
                <div className="ctr md:flex md:justify-between md:items-center">
                    <ul className="pl-4 text-white font-medium flex items-center">
                        <li className="px-4 py-3 font-bold bg-[#157B5C] text-[10px] sm:text-base">
                            <Link href={`/`}>MATCHES</Link>
                        </li>
                        <li className="py-3 px-[12px] md:px-[10px] lg:px-[12px] text-[10px] sm:text-base">
                            <Link href={`/`}>WI vs IND - Live</Link>
                        </li>
                        <li className="py-3 px-[12px] md:px-[10px] lg:px-[12px] text-[10px] sm:text-base">
                            <Link href={`/`}>NORW vs SOUW - Preview</Link>
                        </li>
                        <li className="px-[12px] py-3 hidden md:inline-block text-base">
                            <Link href={`/`}>SOU vs NORS - Live</Link>
                        </li>
                        <li className="px-[12px] py-3 hidden lg:inline-block text-base">
                            <Link href={`/`}>SOUSJG vs MNT - Live</Link>
                        </li>
                        <li className="px-[12px] py-3 hidden xl:inline-block text-base">
                            <Link href={`/`}>SJG vs MNT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default SecondaryNav