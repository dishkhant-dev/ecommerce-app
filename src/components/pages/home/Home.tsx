"use client";

import BrowseByDressStyleSection from "./BrowseByDressStyle";
import FeaturedBrandsSection from "./FeaturedBrands";
import HomePageHeroSection from "./Hero";
import ProductListingSection from "./ProductListing";
import TestimonialsSection from "./Testimonials";

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

interface HomePageClientProps {
    newArrivals: Product[]
    topSelling: Product[]
}

const HomePageClient = ({ newArrivals, topSelling }: HomePageClientProps) => {
    return (
        <>
            <HomePageHeroSection />

            <FeaturedBrandsSection />

            <ProductListingSection
                title="NEW ARRIVALS"
                classname="mt-[50px] sm:mt-18 pb-10 sm:pb-16 border-b border-[#0000001A] margin-main-x"
                products={newArrivals}
            />

            <ProductListingSection
                title="TOP SELLING"
                classname="mt-10 sm:mt-16 pb-[50px] sm:pb-20 margin-main-x"
                products={topSelling}
            />

            <BrowseByDressStyleSection />

            <TestimonialsSection />
        </>
    )
}

export default HomePageClient;