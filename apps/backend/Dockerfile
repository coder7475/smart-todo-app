# Lightweight Node image for development
FROM node:24-alpine

# Enable corepack so pnpm is available
RUN corepack enable

# Create app directory
WORKDIR /app

# Copy only dependency files first (for better layer caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies with pnpm (no frozen lock for dev, but you can add --frozen-lockfile)
RUN pnpm install

# Copy the rest of the source code
COPY . .

# Expose the port your Express server listens on (change if needed)
EXPOSE 3000

# Default command for development – expects "dev" script in package.json
CMD ["pnpm", "dev"]
