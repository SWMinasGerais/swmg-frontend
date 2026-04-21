import type { CollectionConfig } from 'payload'

export const Applications: CollectionConfig = {
    slug: 'applications',
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
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'linkedin',
            type: 'text',
        },
        {
            name: 'role',
            type: 'select',
            options: [
                { label: 'Facilitator', value: 'facilitator' },
                { label: 'Mentor', value: 'mentor' },
                { label: 'Judge', value: 'judge' },
            ],
            required: true,
        },
        {
            name: 'event',
            type: 'relationship',
            relationTo: 'events',
            hasMany: false,
        },
        {
            name: 'status',
            type: 'select',
            options: [
                { label: 'Pending', value: 'pending' },
                { label: 'Approved', value: 'approved' },
                { label: 'Rejected', value: 'rejected' },
            ],
            defaultValue: 'pending',
        },
    ],
}
