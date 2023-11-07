import React from "react";
import Link from "next/link";
import Image from 'next/image';

const Logo = () => {
    return (
        <>
            <Link href={`/`}>
                <Image
                    src={`/cricket-chautari.svg`}
                    alt={`Cricket Chautari`}
                    width={142}
                    height={85}
                    priority={true}
                />
            </Link>
        </>
    )
}

export default Logo