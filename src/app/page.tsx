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
    const res = await fetch('https://dummyjson.com/products?limit=20', {
      next: {
        revalidate: 3600,
        tags: ['products']
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; YourApp/1.0)',
      }
    })

    if (!res.ok) {
      console.error(`Failed to fetch products: ${res.status}`);
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const json = await res.json();

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

    console.log('✅ Server fetched products:', data.length);
    return data;
  } catch (error) {
    console.error('❌ Error fetching products:', error)
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