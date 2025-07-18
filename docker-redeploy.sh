#!/bin/bash

cd ~/dev/double-feature || exit 1

docker compose down --remove-orphans

docker compose up --build -d

docker tag double-feature-mongo michaelbeebe/double-feature-mongo:latest
docker tag double-feature-backend michaelbeebe/double-feature-backend:latest
docker tag double-feature-frontend michaelbeebe/double-feature-frontend:latest

docker push michaelbeebe/double-feature-mongo:latest
docker push michaelbeebe/double-feature-backend:latest
docker push michaelbeebe/double-feature-frontend:latest

# open https://hub.docker.com/repositories/michaelbeebe # Docker Hub repository
# open https://dashboard.render.com/project/prj-d0gfggadbo4c73bbl2og # Render project
open https://dashboard.render.com/web/srv-d0gfgsq4d50c73fq6mh0 # Render frontend
