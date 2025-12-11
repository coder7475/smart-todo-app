# Smart Todo

AI-assisted to‑do list that prioritizes and categorizes your tasks. Monorepo with a Vite/React frontend and an Express/TypeScript backend powered by Google Gemini for task prioritization.

## Project structure
- `apps/frontend` – React + Vite + Redux Toolkit + Tailwind UI
- `apps/backend` – Express + TypeScript, Gemini integration
- `docs/api_design.md` – REST endpoint contract

## Prerequisites
- Node.js 20+
- pnpm 10+
- Google Gemini API key

## Quick start
```bash
pnpm install

# run both apps
pnpm dev

# or run individually
pnpm dev:backend   # http://localhost:3000
pnpm dev:frontend  # http://localhost:5173
```

## Environment variables

### Backend (`apps/backend/.env`)
```
PORT=3000
HOST=localhost
NODE_ENV=development
GEMINI_API_KEY=your_gemini_key
```

### Frontend (`apps/frontend/.env`)
```
VITE_BASE_URL=http://localhost:3000/api/v1
```

## API
Base URL: `/api/v1`

- `POST /prioritize`  
  Body: `{ "tasks": ["Finish report", "Buy groceries"] }`  
  Response: array of `{ task, priority: "High"|"Medium"|"Low", category }`

Error responses follow `docs/api_design.md` (400 validation, 500 server errors).

## Features
- Add tasks in the UI and send them for AI prioritization
- Grouped results by priority with categories
- Input validation on both client and server via Zod
- Graceful server shutdown and centralized error handling

## Scripts (root)
- `pnpm dev` – run frontend and backend together
- `pnpm dev:frontend` / `pnpm dev:backend` – run individually
- `pnpm build` – build all apps