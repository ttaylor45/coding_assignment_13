
FROM node:20-alpine AS builder

WORKDIR /taylor_trent_ui_garden_build_checks

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run quality
RUN npm run build


FROM nginx:1.27-alpine

WORKDIR /taylor_trent_ui_garden_build_checks

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder \
  /taylor_trent_ui_garden_build_checks/build \
  /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]