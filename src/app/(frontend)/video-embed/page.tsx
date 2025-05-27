import { RenderBlocks } from '@/blocks/RenderBlocks'
import VideoEmbedBlock from '@/components/VideoEmbed'

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

const fetchVideo = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/videoEmbed`)
    const data = await res.json()
    console.log('video', data)
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`)
    }
    return data.docs || [] // Ensure fallback to empty array if `docs` doesn't exist
  } catch (error) {
    console.error('Error fetching products:', error)
    return [] // Return empty array if there's an error
  }
}

const [pageRes, productRes] = await Promise.all([
  fetch(`${baseUrl}/api/pages?where[slug][equals]=videoEmbed`, {
    cache: 'no-store',
  }),
  fetch(`${baseUrl}api/videoEmbed`, {
    cache: 'no-store',
  }),
])

const pageData = await pageRes.json()
const productsData = await productRes.json()
const page = pageData.docs?.[0]

const VideoEmbedPage = () => {
  console.log('are we even in the video embed page')
  const video = fetchVideo()

  return (
    <>
      {page?.layout && <RenderBlocks blocks={page.layout} />}
      {page?.content && <RenderBlocks blocks={page.content} />}
      <div>Embeding them videos broda</div>
      <VideoEmbedBlock />
    </>
  )
}

export default VideoEmbedPage
