import type { Block } from 'payload'

export const VideoEmbedBlock: Block = {
  slug: 'videoEmbedBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'info',
      required: true,
    },
    {
      name: 'videoUrl',
      type: 'text',
      label: 'Video URL',
      required: true,
    },
  ],
  interfaceName: 'VideoEmbedBlock',
}
