FROM node:22.14.0-alpine AS build

RUN corepack enable && corepack prepare pnpm@10.32.1 --activate

WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm i
COPY . .
RUN pnpm build


FROM caddy:2.6.2-alpine

COPY --from=build /app/dist /srv/web

COPY ./Caddyfile.stage /etc/caddy/Caddyfile