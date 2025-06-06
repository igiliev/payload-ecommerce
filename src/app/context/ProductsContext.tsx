'use client'
import { createContext } from 'react'
import { useState, ReactNode } from 'react'
import { ProductsProps } from '../(frontend)/products/page'

interface ProductsContextType {
  products: ProductsProps[] | undefined
  setProducts: (products: ProductsProps[]) => void
}

export const ProductsContext = createContext<ProductsContextType>({
  products: undefined,
  setProducts: () => {},
})

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductsProps[]>([])

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}
