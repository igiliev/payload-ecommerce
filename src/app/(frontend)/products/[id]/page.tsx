import { getProducts } from '@/utilities/getProducts'
import Image from 'next/image'
import RichText from '@/components/RichText'

export default async function ProductPage({ params }: { params: { id: string } }) {
  const products = await getProducts() // Custom hook to fetch products
  console.log('Product ID:', params.id)
  console.log('Products:', products)

  const selectedProduct = products.filter((product) => product.id === params.id)

  return (
    <div>
      <h1>Testing my PDP</h1>
      {selectedProduct.length > 0 ? (
        selectedProduct.map((product) => (
          <div key={product.id} className="my-4 product-box">
            <h1 className="text-xl pb-5">{product.title}</h1>
            <Image
              src={product.url}
              alt={product.title}
              width={350}
              height={200}
              className="h-auto"
            />
            <p className="py-3">${product.price}</p>
            <RichText className="m-0 text-lg" data={product.description} />
          </div>
        ))
      ) : (
        <p>Product not found</p>
      )}
    </div>
  )
}
