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