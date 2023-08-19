import { NextSeo } from "next-seo";
import React from "react";

const News = () => {
    return (
        <>
            <NextSeo
                title={`News | Cricket Chautari`}
                description={`News | Cricket Chautari`}
            />
            <div className="ctr">
                <h1 className="text-3xl font-semibold">News</h1>
            </div>
        </>
    )
}

export default News