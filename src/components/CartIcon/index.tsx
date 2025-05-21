'use client'

import React from 'react'
import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'

export const CartIcon: React.FC = () => {
  const { addToCart, cart } = useCart()

  // if (itemCount === 0) return null

  return (
    <>
      <Link
        href="/cart"
        className="cart-icon"
        style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
      >
        <span style={{ fontSize: '24px' }}>🛒</span>
        <span
          style={{
            background: 'black',
            borderRadius: '50%',
            paddingTop: '1px',
            color: 'white',
            fontSize: '12px',
            textAlign: 'center',
            width: '20px',
            height: '20px',
          }}
        >
          {cart.length}
        </span>
      </Link>
    </>
  )
}
