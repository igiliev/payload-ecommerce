import React from 'react'
import Image from 'next/image'

const fetchProducts = async (limit: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/products?limit=${limit}`)
  const { docs: products } = await res.json()
  return products
}

export default async function ProductsBlock({ title, limit }: { title: string; limit: number }) {
  const products = await fetchProducts(limit)

  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product['Product Price']} BGN</p>
            <Image src={product['Product Image'].url} alt={product.title} width="200" />
          </li>
        ))}
      </ul>
    </section>
  )
}
