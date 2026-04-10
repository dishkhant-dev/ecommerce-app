"use client";

import { useEffect, useState, useMemo } from "react";
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

const HomePageClient = ({
    newArrivals: initialNewArrivals,
    topSelling: initialTopSelling
}: HomePageClientProps) => {
    const [newArrivals, setNewArrivals] = useState<Product[]>(initialNewArrivals);
    const [topSelling, setTopSelling] = useState<Product[]>(initialTopSelling);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const hasNoProducts = useMemo(() =>
        initialNewArrivals.length === 0 && initialTopSelling.length === 0,
        [initialNewArrivals.length, initialTopSelling.length]
    );

    useEffect(() => {
        if (hasNoProducts) {
            setLoading(true);
            setError(null);

            fetch('https://dummyjson.com/products?limit=20')
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    return res.json();
                })
                .then(json => {
                    const data: Product[] = json.products.map((p: any) => ({
                        id: p.id,
                        title: p.title,
                        price: p.price,
                        description: p.description,
                        category: p.category,
                        image: p.images?.[0] || '',
                        rating: {
                            rate: p.rating,
                            count: p.reviews?.length || 0,
                        },
                    }));
                    console.log('✅ Client-side fetch successful:', data.length);
                    setNewArrivals(data.slice(0, 4));
                    setTopSelling(data.slice(4, 8));
                })
                .catch(err => {
                    console.error('❌ Client fetch error:', err);
                    setError('Failed to load products. Please refresh the page.');
                })
                .finally(() => setLoading(false));
        }
    }, [hasNoProducts]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                    <p className="text-gray-600">Loading products...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col items-center gap-4 text-center px-4">
                    <p className="text-red-600 text-lg">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                    >
                        Refresh Page
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <HomePageHeroSection />
            <FeaturedBrandsSection />

            {newArrivals.length > 0 && (
                <ProductListingSection
                    title="NEW ARRIVALS"
                    classname="mt-[50px] sm:mt-18 pb-10 sm:pb-16 border-b border-[#0000001A] margin-main-x"
                    products={newArrivals}
                />
            )}

            {topSelling.length > 0 && (
                <ProductListingSection
                    title="TOP SELLING"
                    classname="mt-10 sm:mt-16 pb-[50px] sm:pb-20 margin-main-x"
                    products={topSelling}
                />
            )}

            <BrowseByDressStyleSection />
            <TestimonialsSection />
        </>
    )
}

export default HomePageClient;