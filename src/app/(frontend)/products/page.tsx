import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './style.scss'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import Product from '@/components/Product/Product'

interface ProductProps {
  createdAt: string
  description: any
  filename: string
  filesize: number
  focalX: number
  focalY: number
  height: number
  id: string
  mimeType: string
  price: number
  sizes: any
  slug: string
  slugLock: boolean
  thumbnailURL: string
  title: string
  updatedAt: string
  url: string
  width: number
}

const fetchProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/products`)
    // headers: {
    //   Authorization: `Bearer ${process.env.PAYLOAD_API_KEY}`, // Use your API key here
    // },
    const data = await res.json()
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`)
    }
    return data.docs || [] // Ensure fallback to empty array if `docs` doesn't exist
  } catch (error) {
    console.error('Error fetching products:', error)
    return [] // Return empty array if there's an error
  }
}

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

// Fetch the page and products data from the CMS
const [pageRes, productsRes] = await Promise.all([
  fetch(`${baseUrl}/api/pages?where[slug][equals]=products`, {
    cache: 'no-store',
  }),
  fetch(`${baseUrl}/api/products`, {
    cache: 'no-store',
  }),
])

const pageData = await pageRes.json()
const productsData = await productsRes.json()

const page = pageData.docs?.[0]
export default async function ProductsPage() {
  const products: ProductProps[] = await fetchProducts()

  return (
    <div>
      {/* 🧱 Render Blocks from CMS layout */}
      {page?.layout && <RenderBlocks blocks={page.layout} />}

      <ul className="productsWrapper">
        {products.map((product: ProductProps) => (
          <div key={product.id}>
            <Link href={`/products/${product.id}`} key={product.id}>
              <li>
                <Image src={product.url} alt={product.title} width="350" height="300" />
              </li>
            </Link>
            <Product product={product} />
          </div>
        ))}
      </ul>
    </div>
  )
}
