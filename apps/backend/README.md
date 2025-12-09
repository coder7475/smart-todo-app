# Express + TypeScript + Docker Template

A starter template for building modern backend applications with **Express.js**, **TypeScript**, **Docker**, and **pnpm**. Perfect for local development and production-ready deployments.

---

## 🚀 Features

- ⚡️ Express.js with TypeScript
- 📦 pnpm as package manager
- 🐳 Docker support for dev & prod
- 📂 Modular folder structure
- 🌱 `.env` environment configuration
- 🔁 Hot-reloading with `ts-node-dev`

---

## 🧱 Project Structure

```

.
├── src/
│ ├── routes/
│ │ └── index.ts # Sample route
│ ├── app.ts # Express app config
│ └── server.ts # Entry point
├── .env # Environment variables
├── Dockerfile # Production Docker build
├── docker-compose.yml # Dev environment
├── package.json # Project metadata
├── tsconfig.json # TS config for dev
├── tsconfig.build.json # TS config for prod build
└── README.md # You're here!

```

---

## 🛠️ Development Setup

1. **Install dependencies**

```bash
pnpm install
```

2. **Run locally**

```bash
pnpm run dev
```

3. **Lint and type-check (optional)**

```bash
pnpm run build
```

---

## 🐳 Docker Usage

### Run in Development Mode

```bash
docker-compose up --build
```

### Build for Production

```bash
docker build -t express-ts-app .
```

### Run in Production

```bash
docker run -p 3000:3000 --env-file .env express-ts-app
```

---

## 🌐 Access the App

After running in any mode, open:

```
http://localhost:3000
```

---

## 📦 Built With

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/)

---

## 📄 License

MIT – feel free to use and modify.
