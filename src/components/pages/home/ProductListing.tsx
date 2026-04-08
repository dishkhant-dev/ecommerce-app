"use client";

// Next Imports
import Image from "next/image";

// React Imports
import { useEffect, useState } from "react";

// Third-party Imports
import useEmblaCarousel from "embla-carousel-react";

interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

interface IProductListingSection {
    title: string;
    classname: string;
    products: Product[];
}

const ProductListingSection = ({
    title,
    classname,
    products
}: IProductListingSection) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const renderStars = (rate: number) => {
        const fullStars = Math.floor(rate);
        const hasHalfStar = rate % 1 !== 0;

        return (
            <div className="flex items-center gap-[4.44px] sm:gap-[4.7px] md:gap-[5px] lg:gap-[5.31px]">
                {[...Array(fullStars)].map((_, i) => (
                    <svg
                        key={i}
                        className="w-[16px] h-[16px] sm:w-[16.5px] sm:h-[16.5px] md:w-[17px] md:h-[17px] lg:w-[17.5px] lg:h-[17.5px] xl:w-[18px] xl:h-[18px]"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M8.79245 0L11.4117 5.63991L17.5849 6.38809L13.0304 10.6219L14.2265 16.7243L8.79245 13.701L3.35842 16.7243L4.55449 10.6219L-4.76837e-06 6.38809L6.17325 5.63991L8.79245 0Z" fill="#FFC633" />
                    </svg>
                ))}
                {hasHalfStar && (
                    <svg
                        className="w-[8px] h-[16px] sm:w-[8.3px] sm:h-[16.5px] md:w-[8.5px] md:h-[17px] lg:w-[8.7px] lg:h-[17.5px] xl:w-[9px] xl:h-[17px]"
                        viewBox="0 0 9 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M3.35842 16.7243L8.79246 13.701V0L6.17325 5.63991L0 6.38809L4.55449 10.6219L3.35842 16.7243Z" fill="#FFC633" />
                    </svg>
                )}
            </div>
        );
    };

    const getDiscount = (price: number) => {
        if (price > 100) return 20;
        if (price > 50) return 10;
        return 0;
    };

    const ProductCard = ({ product }: { product: Product }) => {
        const discount = getDiscount(product.price);
        const originalPrice = discount > 0 ? (product.price / (1 - discount / 100)).toFixed(2) : null;

        return (
            <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-4">
                <div className="relative w-[198px] h-[200px] sm:w-full sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[298px] bg-[#F0EEED] rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 640px) 198px, (max-width: 768px) 33vw, 25vw"
                        priority={false}
                    />
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-2">
                    <h3 className="font-bold text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] leading-[110%] text-[#000000] line-clamp-1">
                        {product.title}
                    </h3>

                    <div className="flex items-center gap-[10px] sm:gap-[11px] md:gap-[12px] lg:gap-[13px]">
                        {renderStars(product.rating.rate)}
                        <p className="text-[12px] sm:text-[12.5px] md:text-[13px] lg:text-[13.5px] xl:text-[14px] leading-[100%] text-[#000000]">
                            {product.rating.rate}/5
                        </p>
                    </div>

                    {discount > 0 ? (
                        <div className="flex items-center gap-[5px] sm:gap-[6px] md:gap-[8px] lg:gap-[9px] xl:gap-2.5">
                            <p className="text-[20px] sm:text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px] font-bold leading-[100%] text-[#000000]">
                                ${product.price}
                            </p>
                            <p className="text-[20px] sm:text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px] font-bold leading-[100%] text-[#00000066] line-through">
                                ${originalPrice}
                            </p>
                            <div className="bg-[#FF33331A] rounded-[62px] py-1 sm:py-1.5 px-2 sm:px-2.5 md:px-3 text-[#FF3333] text-[10px] sm:text-[10.5px] md:text-[11px] lg:text-[11.5px] xl:text-[12px] font-medium leading-[100%]">
                                -{discount}%
                            </div>
                        </div>
                    ) : (
                        <p className="text-[20px] sm:text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px] font-bold leading-[100%] text-[#000000]">
                            ${product.price}
                        </p>
                    )}
                </div>
            </div>
        );
    };

    if (!products || products.length === 0) {
        return (
            <div className={`${classname}`}>
                <h2 className="text-center integralcf-font font-bold text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] leading-[100%] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-[55px]">
                    {title}
                </h2>
                <p className="text-center text-gray-500">No products available</p>
            </div>
        );
    }

    return (
        <div className={`${classname}`}>
            <h2 className="text-center integralcf-font font-bold text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] leading-[100%] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-[55px]">
                {title}
            </h2>

            {isMobile ? (
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-5">
                        {products.map((product) => (
                            <div key={product.id} className="flex-[0_0_198px] min-w-0">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}

            <div className="mt-6 sm:mt-7 md:mt-8 lg:mt-9 flex items-center justify-center">
                <button className="w-full sm:w-auto md:w-max cursor-pointer border border-[#0000001A] rounded-[62px] py-3 sm:py-3.5 md:py-4 lg:py-[15px] px-16 sm:px-[72px] md:px-[80px] lg:px-20 text-[#000000] font-medium text-[14px] sm:text-[15px] md:text-[15.5px] lg:text-[16px] leading-[100%] hover:bg-[#F0F0F0] transition-colors">
                    View All
                </button>
            </div>
        </div>
    );
};

export default ProductListingSection;