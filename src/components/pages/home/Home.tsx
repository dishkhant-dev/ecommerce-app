"use client";

import FeaturedBrandsSection from "./FeaturedBrands";
import HomePageHeroSection from "./Hero";
import NewArrivalsSection from "./NewArrivals";

const HomePageClient = () => {
    return (
        <>
            <HomePageHeroSection />

            <FeaturedBrandsSection />

            <NewArrivalsSection />
        </>
    )
}

export default HomePageClient;