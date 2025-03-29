ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine AS stage_base
WORKDIR /usr/app

FROM stage_base AS stage_build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci
COPY . .
RUN npm run build


FROM nginx:alpine AS stage_prod
WORKDIR /app
COPY --from=stage_build /usr/app/dist/app-frontend/browser /usr/share/nginx/html
COPY ./public/env.js /usr/share/nginx/html/env2.js
CMD ["sh", "-c", "envsubst < /usr/share/nginx/html/env2.js > /usr/share/nginx/html/env.js && nginx -g 'daemon off;'"]

