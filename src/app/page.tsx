import HomePageClient from "@/components/pages/home/Home"
import { Suspense } from "react"
import ProductsSkeleton from "@/components/skeletons/ProductsSkeleton"

export interface Product {
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

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      next: {
        revalidate: 3600,
        tags: ['products']
      },
    })

    if (!res.ok) {
      console.error(`⚠️ Server-side fetch failed (status ${res.status}) — client-side fallback will handle it`);
      return []
    }

    const data = await res.json();
    console.log('✅ Server fetched products:', data.length);
    return data;
  } catch (error) {
    console.error('⚠️ Server-side fetch error — client-side fallback will handle it:', error)
    return []
  }
}

const HomePage = async () => {
  const allProducts = await getProducts()

  const newArrivals = allProducts.slice(0, 4);
  const topSelling = allProducts.slice(4, 8);

  return (
    <Suspense fallback={<ProductsSkeleton />}>
      <HomePageClient
        newArrivals={newArrivals}
        topSelling={topSelling}
      />
    </Suspense>
  )
}

export default HomePage;