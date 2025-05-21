'use client'
import { useCart } from '@/app/context/CartContext'
import Link from 'next/link'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="globalContainer">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>
          Your cart is empty.{' '}
          <Link href="/" className="text-blue-500 underline">
            Go back
          </Link>
        </p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                  {/* <CheckoutButton cart={item} /> */}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-4">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <div className="flex gap-4 mt-4">
              <Link
                href="/checkout"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Checkout
              </Link>
              <button onClick={clearCart} className="text-gray-500 hover:underline">
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
