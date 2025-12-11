# 📝 Smart Todo App Frontend

This is the frontend for the **Smart Todo App**, a modern full-stack application for managing your todos efficiently. Built with React, TypeScript, Vite, Redux Toolkit, Tailwind CSS, Shadcn UI, and designed for seamless deployment on Cloudflare. This project emphasizes scalability, speed, developer experience, and maintainable architecture.

---

## 📚 Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Development](#development)
- [Building & Deployment](#building--deployment)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 🚩 Features

- ⚡ _Vite_-powered fast builds and hot module reload
- ✨ **React 18+** with **TypeScript** for modern, type-safe development
- 💾 Global state management with **Redux Toolkit**
- 🎨 **Tailwind CSS** and **Shadcn UI** for elegant, customizable UI
- 🚀 Deployment-ready for **Cloudflare Pages**/**Workers**
- 🧹 Pre-configured **ESLint** and **Prettier** for high code quality
- 🧩 Modular folder structure for scalable growth

---

## 🚀 Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/your-org/smart-todo-app.git
cd smart-todo-app
cd apps/frontend
```

### 2. Install Dependencies

Make sure you have [pnpm](https://pnpm.io/) installed ([Node.js](https://nodejs.org/) >= 18). Then:

```sh
pnpm install
```

---

## 💻 Development

To start the development server with hot-reload:

```sh
pnpm dev
```

Runs at [http://localhost:5173](http://localhost:5173) by default.

---

## 🏗️ Building & Deployment

### Build for Production

```sh
pnpm build
```

### Preview Production Build Locally

```sh
pnpm preview
```

### Deploy to Cloudflare

Make sure your Cloudflare credentials and `wrangler.jsonc` are set up.

```sh
pnpm deploy
```

---

## 🛠 Tech Stack

- **React 18+**
- **TypeScript**
- **Vite**
- **Redux Toolkit**
- **Tailwind CSS**
- **Shadcn UI**
- **ESLint** & **Prettier**
- **Cloudflare Pages/Workers** (for serverless deployment)

---

## 📁 Project Structure

```
apps/frontend
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   ├── components/
│   ├── config/
│   ├── constants/
│   ├── hooks/
│   ├── index.css
│   ├── layout/
│   ├── lib/
│   ├── main.tsx
│   ├── modules/
│   ├── pages/
│   ├── providers/
│   ├── redux/        # State management logic
│   ├── router/
│   ├── services/
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.worker.json
├── vite.config.ts
├── worker/
│   └── index.ts
├── worker-configuration.d.ts
└── wrangler.jsonc
```

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
- Fork the repository
- Create a new branch (`git checkout -b my-feature`)
- Commit your changes
- Open a pull request

---

## 📄 License

This project is licensed under the [MIT License](../LICENSE).

---

_Developed with ❤️ by the Smart Todo App team._
