import React from 'react'
import Image from 'next/image'

const fetchProducts = async () => {
  try {
    console.log('link', `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/products`)
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/products`)
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

export default async function ProductsPage() {
  const products = await fetchProducts()
  console.log('products', products)

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price} BGN</p>
            <Image src={product.url} alt={product.title} width="200" height="300" />
            {/* <p>{product.description}</p> */}
          </li>
        ))}
      </ul>
    </div>
  )
}
