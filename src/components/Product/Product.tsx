'use client'
import { useCart } from '@/app/(frontend)/context/CartContext'

interface ProductProps {
  product: {
    id: string
    name: string
    price: number
  }
}

export default function Product({ product }: ProductProps) {
  const { addToCart } = useCart()

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart({ ...product, quantity: 1 })}>Add to Cart</button>
    </div>
  )
}
