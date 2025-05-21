import { RenderBlocks } from '@/blocks/RenderBlocks'
import CheckoutItems from '@/components/CheckoutItems'
const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

// Fetch the page and products data from the CMS
async function fetchPageAndProducts() {
  const [pageRes, checkoutRes] = await Promise.all([
    fetch(`${baseUrl}/api/pages?where[slug][equals]=checkout`, {
      cache: 'no-store',
    }),
    fetch(`${baseUrl}/api/checkout`, {
      cache: 'no-store',
    }),
  ])

  return pageRes.json()
}

// CheckoutPage component
export default async function CheckoutPage() {
  const pageData = await fetchPageAndProducts()
  const page = pageData.docs[0]

  return (
    <div className="flex justify-evenly container gap-4 mx-auto mt-10">
      {/* 🧱 Render Blocks from CMS layout */}
      {page?.layout && (
        <div className="w-full">
          <RenderBlocks blocks={page.layout} />
        </div>
      )}
      <div>
        <CheckoutItems />
      </div>
    </div>
  )
}
