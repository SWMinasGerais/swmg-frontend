import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import { seed } from './src/seed.js'

// ES Module replacement for __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Parse Neon connection string
const parseConnectionString = (url: string) => {
  if (!url) return null;
  
  try {
    const regex = /^postgresql:\/\/([^:]+):([^@]+)@([^\/]+)\/([^?]+).*$/;
    const matches = url.match(regex);
    
    if (matches) {
      return {
        user: matches[1],
        password: matches[2],
        host: matches[3],
        database: matches[4]
      };
    }
    return null;
  } catch (e) {
    console.error('Error parsing connection string:', e);
    return null;
  }
};

// Get DB params from connection string
const neonParams = parseConnectionString(process.env.DATABASE_URL || '');
console.log('Neon params:', neonParams ? 'Parsed successfully' : 'Failed to parse');

// Criar uma configuração mais detalhada para o PostgreSQL
const dbConfig = neonParams ? {
  pool: {
    user: neonParams.user,
    password: neonParams.password,
    host: neonParams.host,
    database: neonParams.database,
    ssl: { rejectUnauthorized: false }
  },
} : {
  pool: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  },
};

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key',
  admin: {
    user: 'users',
  },
  db: postgresAdapter(dbConfig),
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