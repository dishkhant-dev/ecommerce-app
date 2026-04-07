"use client";

// Next imports
import Image from "next/image";

// Images
import BannerImage from "@/assets/images/pages/home/hero/hero-bg.jpeg";
import MobileBannerImage from "@/assets/images/pages/home/hero/hero-bg-mobile.png";

const HomePageHeroSection = () => {
    return (
        <>
            <div className="relative w-full sm:h-[663px] h-[480px]">
                <Image
                    src={BannerImage}
                    alt="Banner Image"
                    fill
                    className="object-cover hidden sm:block"
                />

                <div className="absolute inset-0 padding-main-x pt-10 sm:pt-25">
                    <h1 className="integralcf-font font-bold text-[36px] sm:text-[64px] leading-[34px] sm:leading-[64px] text-[#000000]">FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>

                    <p className="mt-5 sm:mt-8 mb-6 sm:mb-8 text-[#00000099] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px]">Browse through our diverse range of meticulously crafted garments, designed <br className="hidden sm:block" /> to bring out your individuality and cater to your sense of style.</p>

                    <button className="bg-[#000000] w-full sm:w-max rounded-[62px] py-[15px] px-[65px] text-white font-medium text-[16px] leading-[100%]">Shop Now</button>

                    <div className="mt-5 sm:mt-12 flex items-center justify-center sm:justify-start gap-6.5 sm:gap-8 px-10 sm:px-0">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[#000000] font-bold text-[24px] sm:text-[40px] leading-[100%]">200+</h3>
                            <p className="text-[#00000099] text-[12px] sm:text-[16px] leading-[22px]">International Brands</p>
                        </div>
                        <div className="border-l border-[#0000001A] h-[74px]"></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[#000000] font-bold text-[24px] sm:text-[40px] leading-[100%]">2,000+</h3>
                            <p className="text-[#00000099] text-[12px] sm:text-[16px] leading-[22px]">High-Quality Products</p>
                        </div>
                        <div className="hidden sm:block border-l border-[#0000001A] h-[74px]"></div>
                        <div className="sm:flex flex-col hidden">
                            <h3 className="text-[#000000] font-bold text-[24px] sm:text-[40px] leading-[100%]">30,000+</h3>
                            <p className="text-[#00000099] text-[16px] leading-[22px]">Happy Customers</p>
                        </div>
                    </div>
                    <div className="mx-auto w-max mt-3 sm:hidden flex flex-col">
                        <h3 className="text-[#000000] font-bold text-[24px] sm:text-[40px] leading-[100%]">30,000+</h3>
                        <p className="text-[#00000099] text-[12px] sm:text-[16px] leading-[22px]">Happy Customers</p>
                    </div>
                </div>
            </div>

            <div className="sm:hidden relative w-full h-[663px]">
                <div>
                    <Image
                        src={MobileBannerImage}
                        alt="Banner Image"
                        fill
                        className="object-cover sm:hidden block"
                    />
                </div>
            </div>
        </>
    )
}

export default HomePageHeroSection;