"use client";

// Next Imports
import Image from "next/image";

// Images
import ProductImage1 from "@/assets/images/products/product-1.png";

interface IProductListingSection {
    title: string;
    classname: string;
}

const ProductListingSection = ({
    title,
    classname
}: IProductListingSection) => {
    return (
        <div className={`${classname}`}>
            <h2 className="text-center integralcf-font font-bold text-[32px] sm:text-[48px] leading-[100%] mb-8 sm:mb-[55px]">{title}</h2>

            <div className="sm:grid sm:grid-cols-4 flex items-center gap-5">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex flex-col gap-2.5 sm:gap-4">
                        <div className="relative w-[198px] h-50 sm:w-full sm:h-[298px]">
                            <Image
                                src={ProductImage1}
                                alt="Product Image"
                                fill
                                className="object-cover rounded-[16px] sm:rounded-[20px]"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-[16px] sm:text-[20px] leading-[100%] text-[#000000]">T-shirt with tape details</h3>

                            <div className="flex items-center gap-[13px]">
                                <div className="flex items-center gap-[4.44px] sm:gap-[5.31px]">
                                    {[1, 2, 3, 4].map((i) => (
                                        <svg key={i} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.79245 0L11.4117 5.63991L17.5849 6.38809L13.0304 10.6219L14.2265 16.7243L8.79245 13.701L3.35842 16.7243L4.55449 10.6219L-4.76837e-06 6.38809L6.17325 5.63991L8.79245 0Z" fill="#FFC633" />
                                        </svg>
                                    ))}
                                    <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.35842 16.7243L8.79246 13.701V0L6.17325 5.63991L0 6.38809L4.55449 10.6219L3.35842 16.7243Z" fill="#FFC633" />
                                    </svg>
                                </div>
                                <p className="text-[12px] sm:text-[14px] leading-[100%] text-[#000000]">4.5/5</p>
                            </div>
                            {i === 1 ? (
                                <div className="flex items-center gap-[5px] sm:gap-2.5">
                                    <p className="text-[20px] sm:text-[24px] font-bold leading-[100%] text-[#000000]">$120</p>
                                    <p className="text-[20px] sm:text-[24px] font-bold leading-[100%] text-[#00000066] line-through">$260</p>
                                    <div className="bg-[#FF33331A] rounded-[62px] py-1.5 px-3 text-[#FF3333] text-[10px] sm:text-[12px] font-medium leading-[100%]">-20%</div>
                                </div>
                            ) : (
                                <p className="text-[20px] sm:text-[24px] font-bold leading-[100%] text-[#000000]">$120</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 sm:mt-9 flex items-center justify-center">
                <button className="w-full sm:w-max cursor-pointer border border-[#0000001A] rounded-[62px] py-[15px] px-20 text-[#000000] font-medium text-[16px] leading-[100%]">View All</button>
            </div>
        </div>
    )
}

export default ProductListingSection;