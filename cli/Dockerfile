FROM node:24.0.1-alpine3.21 AS dev-dependencies-env
COPY . /app
WORKDIR /app
RUN CI=true pnpm i

FROM node:24.0.1-alpine3.21 AS prod-dependencies-env
COPY ./package.json pnpm-lock.yaml /app/
WORKDIR /app
RUN CI=true pnpm i --omit=dev

FROM node:24.0.1-alpine3.21 AS build-env
COPY . /app/
COPY --from=dev-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:24.0.1-alpine3.21
COPY ./package.json pnpm-lock.yaml /app/
COPY --from=prod-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
CMD ["npm", "run", "start"]