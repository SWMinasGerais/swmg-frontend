import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import { seed } from './src/seed.js'

// ES Module replacement for __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Caminho para o arquivo de banco de dados SQLite
const dbPath = path.resolve(__dirname, 'payload.db')

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key',
  admin: {
    user: 'users',
  },
  // Usar SQLite para desenvolvimento local
  db: sqliteAdapter({
    client: {
      url: `file:${dbPath}`
    }
  }),
  editor: lexicalEditor({}),
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      slug: 'pages',
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
          name: 'content',
          type: 'richText',
        },
      ],
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  onInit: async (payload) => {
    if (process.env.PAYLOAD_SEED === 'true') {
      await seed(payload.config)
    }
  },
}) 