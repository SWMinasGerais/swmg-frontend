import { SanitizedConfig } from 'payload'
import payload from 'payload'
import { fileURLToPath } from 'url'
import path from 'path'

// ES Module replacement for __dirname (if needed)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const seed = async (config: SanitizedConfig) => {
  await payload.init({ config })

  // Create a user
  const { email } = await payload.create({
    collection: 'users',
    data: {
      email: 'admin@example.com',
      password: 'Password123!',
      name: 'Admin User',
    },
  })

  // Create some sample pages
  await payload.create({
    collection: 'pages',
    data: {
      title: 'Welcome to Startup Pulse',
      content: [
        {
          children: [
            {
              text: 'This is a sample page created with PayloadCMS and Neon PostgreSQL.',
            },
          ],
        },
      ],
    },
  })

  await payload.create({
    collection: 'pages',
    data: {
      title: 'About Us',
      content: [
        {
          children: [
            {
              text: 'Startup Pulse is a platform for tracking and analyzing startup performance.',
            },
          ],
        },
      ],
    },
  })

  console.log(`🌱 Seed completed! Admin user created with email: ${email}`)
  
  process.exit(0)
} 