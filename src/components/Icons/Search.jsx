import React from 'react';
import Image from 'next/image';
const Search = () => {
    return (
        <>
            <li className="cursor-pointer">
                <Image src="/ham-burger-icon.svg" height={50} width ={50} alt="Search Icon" />
            </li>
        </>
    )
}

export default Search;