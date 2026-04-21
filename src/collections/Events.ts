import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
    slug: 'events',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'city',
            type: 'text',
            required: true,
        },
        {
            name: 'date',
            type: 'date',
        },
        {
            name: 'theme',
            type: 'text',
        },
        {
            name: 'winningStartup',
            type: 'relationship',
            relationTo: 'startups',
            hasMany: false,
        },
    ],
}
