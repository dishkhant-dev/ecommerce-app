"use client";

// Next imports
import Image from "next/image";

// Images
import BannerImage from "@/assets/images/pages/home/hero/hero-bg.jpeg";

const HomePageHeroSection = () => {
    return (
        <div className="relative w-full h-[663px]">
            <Image
                src={BannerImage}
                alt="Banner Image"
                fill
                className="object-cover"
            />

            <div className="absolute inset-0 padding-main-x pt-25">
                <h1 className="integralcf-font font-bold text-[64px] leading-[64px] text-[#000000]">FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>

                <p className="my-8 text-[#00000099] text-[16px] leading-[22px]">Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>

                <button className="bg-[#000000] rounded-[62px] py-[15px] px-[65px] text-white font-medium text-[16px] leading-[100%]">Shop Now</button>

                <div className="mt-12 flex items-center gap-8">
                    <div className="flex flex-col">
                        <h3 className="text-[#000000] font-bold text-[40px] leading-[100%]">200+</h3>
                        <p className="text-[#00000099] text-[16px] leading-[22px]">International Brands</p>
                    </div>
                    <div className="border-l border-[#0000001A] h-[74px]"></div>
                    <div className="flex flex-col">
                        <h3 className="text-[#000000] font-bold text-[40px] leading-[100%]">2,000+</h3>
                        <p className="text-[#00000099] text-[16px] leading-[22px]">High-Quality Products</p>
                    </div>
                    <div className="border-l border-[#0000001A] h-[74px]"></div>
                    <div className="flex flex-col">
                        <h3 className="text-[#000000] font-bold text-[40px] leading-[100%]">30,000+</h3>
                        <p className="text-[#00000099] text-[16px] leading-[22px]">Happy Customers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageHeroSection;