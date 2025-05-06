# ── Build Stage ───────────────────────────
FROM node:20-slim AS builder
WORKDIR /app

# Copy package.json and lockfile (if present)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source and build
COPY . .
RUN npm run build

# ── Serve Stage ───────────────────────────
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]