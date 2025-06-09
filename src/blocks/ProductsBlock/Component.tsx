'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { getProducts } from '@/utilities/getProducts'
import RichText from '@/components/RichText'
import { animate, stagger } from 'motion'
import MotionWrapper from '@/components/MotionWrapper'
import Link from 'next/link'

interface ProductsBlockProps {
  image: ImageProps
  title: string
  price?: number
  description: any
  url: string
  id: string
}

interface ImageProps {
  url: string
  id: string
  width?: number
  height?: number
}

interface Props {
  title: string
  limit: number
}

export const ProductsBlock: React.FC<Props> = ({ title, limit }) => {
  const [products, setProducts] = React.useState<ProductsBlockProps[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts()
        setProducts(products)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()

    if (products.length === 0) return

    const timeout = setTimeout(() => {
      const boxes = document.querySelectorAll('.product-box')
      console.log('Boxes to animate:', boxes)
      animate(boxes, { y: 0, opacity: 1 }, { delay: stagger(0.1) })
    }, 50) // Small delay to let DOM render (can adjust or remove if not needed)

    return () => clearTimeout(timeout)
  }, [products.length])

  const limitedProducts = products.slice(0, limit)

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {limitedProducts.length > 0 ? (
          limitedProducts.map((product) => {
            return (
              <MotionWrapper key={product.id}>
                <Link href={`/products/${product.id}`} key={product.id}>
                  <div key={product.id} className="my-4 product-box">
                    <h1 className="text-xl pb-5">{product.title}</h1>
                    <Image
                      src={product.url}
                      alt={product.title}
                      width={350}
                      height={200}
                      className="h-auto w-full"
                    />
                    <div className="p-4 border rounded-lg shadow-md h-[140px]">
                      <p className="py-3">${product.price}</p>
                      <RichText className="p-0 text-lg" data={product.description} />
                    </div>
                  </div>
                </Link>
              </MotionWrapper>
            )
          })
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  )
}
