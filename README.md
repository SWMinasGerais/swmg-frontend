# Startup Pulse - Vite + React + PayloadCMS

A modern web application built with Vite, React, ShadCN UI components, and PayloadCMS with PostgreSQL (Neon) database.

## Features

- 🚀 Vite for fast development
- ⚛️ React for UI
- 🎨 ShadCN UI components
- 📝 PayloadCMS for content management
- 🐘 PostgreSQL (Neon) for database
- 🔒 Authentication built-in

## Setup

1. Clone the repository
2. Install dependencies:

```bash
yarn install
```

3. Create a `.env` file in the root directory with the following environment variables:

```
PAYLOAD_SECRET=your-secret-key-change-me
DATABASE_URL=postgres://your-neon-connection-string
PORT=3001
```

4. Run the seed script to populate the database:

```bash
yarn seed
```

5. Start the development server:

```bash
yarn dev
```

6. Access the application:
   - Frontend: http://localhost:8080
   - PayloadCMS Admin: http://localhost:8080/admin

## Admin Login

After running the seed script, you can login to the admin panel with:

- Email: admin@example.com
- Password: Password123!

## Available Scripts

- `yarn dev` - Start both the frontend and PayloadCMS server
- `yarn dev:vite` - Start only the Vite frontend
- `yarn dev:payload` - Start only the PayloadCMS server
- `yarn build` - Build the frontend for production
- `yarn build:payload` - Build PayloadCMS for production
- `yarn seed` - Seed the database with initial data
- `yarn generate:types` - Generate TypeScript types for PayloadCMS collections
