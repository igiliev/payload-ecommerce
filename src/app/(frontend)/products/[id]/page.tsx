import React from 'react'

const fetchProduct = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/products/${id}`)
  return res.json()
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id)

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price} BGN</p>
      <img src={product.image.url} alt={product.name} width="200" />
      <p>{product.description}</p>
    </div>
  )
}
