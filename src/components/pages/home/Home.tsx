"use client";

import BrowseByDressStyleSection from "./BrowseByDressStyle";
import FeaturedBrandsSection from "./FeaturedBrands";
import HomePageHeroSection from "./Hero";
import ProductListingSection from "./ProductListing";

const HomePageClient = () => {
    return (
        <>
            <HomePageHeroSection />

            <FeaturedBrandsSection />

            <ProductListingSection title="NEW ARRIVALS" classname="mt-18 pb-16 border-b border-[#0000001A] margin-main-x" />

            <ProductListingSection title="TOP SELLING" classname="mt-16 pb-20 margin-main-x" />

            <BrowseByDressStyleSection />
        </>
    )
}

export default HomePageClient;