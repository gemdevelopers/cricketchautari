import { NextSeo } from "next-seo";
import React from "react";

const Videos = () => {
    return (
        <>
            <NextSeo
                title={`Videos | Cricket Chautari`}
                description={`Videos | Cricket Chautari`}
            />
            <div className="ctr">
                <h1 className="text-3xl font-semibold">Videos</h1>
            </div>
        </>
    )
}

export default Videos