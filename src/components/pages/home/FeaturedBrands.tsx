"use client";

// Next Imports
import Image from "next/image";

// Images
import VersaceLogo from "@/assets/images/pages/home/featured-brands/versace.png";
const FeaturedBrandsSection = () => {
    return (
        <div className="bg-[#000000] padding-main-x flex flex-wrap items-center justify-center xl:justify-start gap-8.5 sm:gap-16 lg:gap-16 xl:gap-[106px] py-10.5">
            {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="relative w-24 h-6 sm:w-32 sm:h-8 md:w-40 md:h-9">
                    <Image
                        src={VersaceLogo}
                        alt="Brand Logo"
                        fill
                        className="object-contain"
                    />
                </div>
            ))}
        </div>
    )
}

export default FeaturedBrandsSection;