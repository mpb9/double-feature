# syntax=docker/dockerfile:1

FROM node:24.0.1-slim AS development

# Create server directory
WORKDIR /server

COPY package.json /server/package.json
COPY package-lock.json /server/package-lock.json
RUN npm ci

COPY . /server

EXPOSE 2046

CMD [ "npm", "run", "dev" ]

# FROM development AS dev-envs
# RUN <<EOF
# apt-get update
# apt-get install -y --no-install-recommends git
# EOF

# RUN <<EOF
# useradd -s /bin/bash -m vscode
# groupadd docker
# usermod -aG docker vscode
# EOF
# # install Docker tools (cli, buildx, compose)
# COPY --from=gloursdocker/docker / /
# CMD [ "npm", "run", "dev" ]