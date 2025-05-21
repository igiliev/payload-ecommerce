'use client'
import { useCart } from '@/app/context/CartContext'

const CheckoutItems = () => {
  const { cart } = useCart()
  console.log('cart', cart)
  return (
    <div className="bg-gray-200 text-black p-4">
      <h1 className="text-center mt-5">Checkout Items</h1>
      <div className="flex justufy-center flex-col items-center">
        {cart.length > 0 ? (
          cart.map((item, index) => {
            console.log('item', item)
            return (
              <div key={index} className="p-4 m-2 bg-white rounded shadow">
                <h3 className="text-xl">{item.title}</h3>
                <p>Price: ${item.price}</p>
              </div>
            )
          })
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
    </div>
  )
}

export default CheckoutItems
