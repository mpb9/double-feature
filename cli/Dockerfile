FROM node:24.0.1-slim AS base

COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN npm ci --omit=dev
FROM base AS build
RUN npm ci
RUN npm run build

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
EXPOSE 3000
CMD [ "npm", "run", "start" ]




# MARK: Attempt 2 (df-cli2)
# # =========================================
# # Stage 1: Build the React.js Application
# # =========================================
# ARG NODE_VERSION=24.0.1-alpine
# ARG NGINX_VERSION=alpine3.21

# # Use a lightweight Node.js image for building (customizable via ARG)
# FROM node:${NODE_VERSION} AS builder
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package-related files first to leverage Docker's caching mechanism
# COPY --link app/package.json app/pnpm-lock.yaml ./app/

# # Install project dependencies using pnpm install --frozen-lockfile (ensures a clean, reproducible install)
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# # Copy the rest of the application source code into the container
# COPY --link . .


# # =========================================
# # Stage 2: Prepare Nginx to Serve Static Files
# # =========================================

# FROM nginxinc/nginx-unprivileged:${NGINX_VERSION} AS runner

# # Use a built-in non-root user for security best practices
# USER nginx

# # Copy custom Nginx config
# COPY --link nginx.conf /etc/nginx/nginx.conf

# # Copy the static build output from the build stage to Nginx's default HTML serving directory
# COPY --link --from=builder /app/dist /usr/share/nginx/html

# # Expose port 8080 to allow HTTP traffic
# # Note: The default NGINX container now listens on port 8080 instead of 80 
# EXPOSE 8080

# # Start Nginx directly with custom config
# ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf"]
# CMD ["-g", "daemon off;"]


# MARK: Attempt 1
# ARG NODE_VERSION=24.0.1-alpine

# FROM node:${NODE_VERSION} AS builder
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable

# FROM builder AS development-dependencies-env
# COPY . /app/
# WORKDIR /app
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# FROM builder AS production-dependencies-env
# COPY ./package.json pnpm-lock.yaml /app/
# WORKDIR /app
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# FROM builder AS build-env
# COPY . /app/
# COPY --from=development-dependencies-env /app/node_modules /app/node_modules
# WORKDIR /app
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm run build

# FROM builder
# COPY ./package.json pnpm-lock.yaml /app/
# COPY --from=production-dependencies-env /app/node_modules /app/node_modules
# COPY --from=build-env /app/build /app/build
# WORKDIR /app
# CMD ["pnpm", "start"]

