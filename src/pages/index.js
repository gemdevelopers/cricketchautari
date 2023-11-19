import Footer from "@/components/Footer/Footer";
import HomeSlider from "@/components/Home/HomeSlider";
import TabContents from "@/components/Home/TabContents";
import TrendingNews from "@/components/Home/TrendingNews";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title={`Cricket Chautrai`}
        description={`Cricket Chautari is a digital product where you can learn,play and earn by various experts ,news ,updates etc.`}
      />
      <div className="bg-[#f0f0f0] border-b-2 border-[#76767669]">
        {/* <HomeSlider /> */}
      </div>

      <div className="bg-[#f0f0f0]">
        <div className="ctr py-12 grid grid-cols-12 gap-4">
          <TrendingNews />
          <TabContents />

        </div>
      </div>
      <div className="bg-[#525151]">
        <Footer />
      </div>
    </>

  )
}