'use client'
import { useCart } from '@/app/(frontend)/context/CartContext'

interface ProductProps {
  product: {
    id: string
    title: string
    price: number
  }
}

export default function Product({ product }: ProductProps) {
  const { addToCart } = useCart()

  return (
    <div className="flex flex-col gap-4 p-4 border border-slate-500 rounded-md shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-xl">{product.title}</h3>
      <p>Price: ${product.price}</p>
      <button
        className="bg-[#FFDDC0] p-3 text-black rounded-md hover:bg-[#FFABAB] transition duration-300"
        onClick={() => addToCart({ ...product, quantity: 1 })}
      >
        Add to Cart
      </button>
    </div>
  )
}
