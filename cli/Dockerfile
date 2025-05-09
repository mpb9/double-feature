FROM node:24.0.1-slim AS dev-dependencies-env
COPY . /app
WORKDIR /app
RUN npm ci

FROM node:24.0.1-slim AS prod-dependencies-env
COPY ./package.json pnpm-lock.yaml /app/
WORKDIR /app
RUN npm ci --omit=dev

FROM node:24.0.1-slim AS build-env
COPY . /app/
COPY --from=dev-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:24.0.1-slim
COPY ./package.json pnpm-lock.yaml /app/
COPY --from=prod-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
CMD ["npm", "run", "start"]