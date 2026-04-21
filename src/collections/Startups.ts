import type { CollectionConfig } from 'payload'

export const Startups: CollectionConfig = {
    slug: 'startups',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
        },
        {
            name: 'event',
            type: 'relationship',
            relationTo: 'events',
            hasMany: false,
        },
        {
            name: 'isWinner',
            type: 'checkbox',
            defaultValue: false,
            label: 'Winning Startup',
        },
    ],
}
