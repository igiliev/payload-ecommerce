import { getProducts } from '@/utilities/getProducts'
import Image from 'next/image'
import Product from '@/components/Product/Product'

export default async function ProductPage({ params }: { params: { id: string } }) {
  const products = await getProducts() // Custom hook to fetch products

  const selectedProduct = products.filter((product) => product.id === params.id)

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {selectedProduct.length > 0 ? (
        selectedProduct.map((product) => (
          <div key={product.id} className="my-4 product-box">
            <h1 className="text-2xl font-bold pb-5">{product.title}</h1>
            <Image
              src={product.url}
              alt={product.title}
              width={350}
              height={200}
              className="h-auto"
            />
            <Product product={product} />
          </div>
        ))
      ) : (
        <p>Product not found</p>
      )}
    </div>
  )
}
