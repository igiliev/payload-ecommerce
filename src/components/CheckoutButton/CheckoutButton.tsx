'use client'

export default function CheckoutButton({ cartItems }: { cartItems: any[] }) {
  const handleCheckout = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cartItems }),
    })

    const { url } = await res.json()
    window.location.href = url
  }

  return (
    <button onClick={handleCheckout} className="bg-black text-white px-4 py-2 rounded">
      Checkout
    </button>
  )
}
