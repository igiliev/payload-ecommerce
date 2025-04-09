'use client'
import { useCart } from '@/app/(frontend)/context/CartContext'

export default function CheckoutButton() {
  const { cart } = useCart()

  const handleCheckout = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart }),
    })

    const { url } = await res.json()
    window.location.href = url
  }

  return <button onClick={handleCheckout}>Checkout</button>
}
