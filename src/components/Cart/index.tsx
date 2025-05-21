'use clinet'

import { useCart } from '@/app/context/CartContext'

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart()

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <h3>Item{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
