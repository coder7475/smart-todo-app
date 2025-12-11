# Smart Todo Backend

Express + TypeScript service that prioritizes user tasks with Google Gemini and serves the frontend via a simple REST API.

## Stack and features
- Express 4 + TypeScript with hot reload via `tsx`
- Google Gemini 2.5 Flash integration for prioritization
- Input and response validation with Zod
- CORS + Helmet middleware, centralized error handling, graceful shutdown
- Bundled with `tsup` for production builds

## Prerequisites
- Node.js 20+
- pnpm 10+
- Google Gemini API key

## Setup
From the repo root:
```bash
pnpm install
```

Create `apps/backend/.env`:
```bash
PORT=3000
HOST=localhost
NODE_ENV=development
GEMINI_API_KEY=your_gemini_key
```

## Run
Development (watch mode):
```bash
pnpm dev:backend      # from repo root
# or
pnpm --filter @smart-todo/backend dev
```

Build and start:
```bash
pnpm --filter @smart-todo/backend build
pnpm --filter @smart-todo/backend start
```

Quality:
```bash
pnpm --filter @smart-todo/backend lint
pnpm --filter @smart-todo/backend format
```

## API
Base URL: `http://localhost:3000/api/v1`

- `POST /prioritize`  
  Body: `{ "tasks": ["Finish report", "Buy groceries"] }`  
  Response (200): array of `{ task, priority: "High"|"Medium"|"Low", category }`

Validation errors return 400; unexpected issues return 500. See `docs/api_design.md` for the contract.

## Folder structure
```
apps/backend
├── src
│   ├── app.ts           # Express app config
│   ├── server.ts        # Entry + graceful shutdown
│   ├── routes/          # HTTP routes
│   ├── tasks/           # Controller, schema, services
│   ├── utils/           # Gemini client, prompts, parsing, validation
│   └── middlewares/     # Error + 404 handlers
├── Dockerfile
├── docker-compose.yml
└── README.md
```
