import type { CollectionConfig } from 'payload'

export const Participants: CollectionConfig = {
    slug: 'participants',
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
            name: 'contact',
            type: 'text',
        },
        {
            name: 'role',
            type: 'select',
            options: [
                { label: 'Hacker (Dev/Tech)', value: 'hacker' },
                { label: 'Hustler (Business/Sales)', value: 'hustler' },
                { label: 'Hipster (Design/UX)', value: 'hipster' },
            ],
            required: true,
        },
        {
            name: 'skills',
            type: 'text',
            hasMany: true,
        },
        {
            name: 'event',
            type: 'relationship',
            relationTo: 'events',
            hasMany: false,
        },
    ],
}
