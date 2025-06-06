export async function getProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/products`)

    if (!res.ok) {
      throw new Error(`Fetch failed with status ${res.status}`)
    }

    const data = await res.json()
    return data.docs || [] // Ensure fallback to empty array if `docs` doesn't exist
  } catch (error) {
    console.error('Error fetching products:', error)
    return [] // or throw error again if you want to handle it upstream
  }
}

export async function getProductsPageData() {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL
  try {
    const [pageRes] = await Promise.all([
      fetch(`${baseUrl}/api/pages?where[slug][equals]=products`, {
        cache: 'no-store',
      }),
      fetch(`${baseUrl}/api/products`, {
        cache: 'no-store',
      }),
    ])

    return pageRes.json()
  } catch (error) {
    console.error('Error fetching products page data:', error)
  }
}
