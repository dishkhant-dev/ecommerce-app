"use client";

// Next Imports
import Image from "next/image";

// Images
import VersaceLogo from "@/assets/images/pages/home/FeaturedBrands/versace.png";
const FeaturedBrandsSection = () => {
    return (
        <div className="bg-[#000000] padding-main-x flex items-center gap-[106px] py-10.5">
            {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="relative w-40 h-9">
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