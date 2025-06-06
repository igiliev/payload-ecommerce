import type { Block } from 'payload'

export const ProductsBlock: Block = {
  slug: 'productsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'limit',
      type: 'number',
      label: 'Limit',
      defaultValue: 6,
      required: true,
    },
  ],
  interfaceName: 'ProductsBlock',
}
