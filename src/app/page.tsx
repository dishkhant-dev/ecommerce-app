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
      throw new Error(`Failed to fetch products: ${res.status}`)
    }

    return res.json()
  } catch (error) {
    console.error('Error fetching products:', error)
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