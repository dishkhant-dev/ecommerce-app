"use client";

import FeaturedBrandsSection from "./FeaturedBrands";
import HomePageHeroSection from "./Hero";
import ProductListingSection from "./ProductListing";

const HomePageClient = () => {
    return (
        <>
            <HomePageHeroSection />

            <FeaturedBrandsSection />

            <ProductListingSection />
        </>
    )
}

export default HomePageClient;