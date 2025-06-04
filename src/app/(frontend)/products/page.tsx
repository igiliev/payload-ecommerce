import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './style.scss'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import Product from '@/components/Product/Product'
import { getProducts, getProductsPageData } from '@/utilities/getProducts'

export interface ProductsProps {
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

// ProductsPage
export default async function ProductsPage() {
  const products = await getProducts() // Custom hook to fetch products
  const pageData = await getProductsPageData()
  const page = pageData.docs?.[0]

  return (
    <div>
      {/* 🧱 Render Blocks from CMS layout */}
      {page?.layout && <RenderBlocks blocks={page.layout} />}

      <ul className="productsWrapper">
        {products.map((product: ProductsProps) => (
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
