import React from 'react'

export const VideoEmbedBlock: React.FC<{
  videoUrl: string
  caption?: string
  disableInnerContainer?: boolean
}> = ({ videoUrl, caption }) => {
  const re = /(?<=watch\?v=)[^&]+/gm
  const videoId = videoUrl.match(re)?.[0] || ''

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="aspect-w-16 aspect-h-9">
        {
          <iframe
            height="420"
            src={`https://www.youtube.com/embed/${videoId}`}
            className="w-full"
            allowFullScreen={true}
            title={caption || 'Video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        }
      </div>
      {caption && <p className="mt-2 text-center text-sm text-gray-500">{caption}</p>}
    </div>
  )
}
