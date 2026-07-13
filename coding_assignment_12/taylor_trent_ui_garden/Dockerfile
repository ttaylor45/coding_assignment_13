FROM node:20-alpine AS build

WORKDIR /taylor_trent_ui_garden

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /taylor_trent_ui_garden/build /usr/share/nginx/html

EXPOSE 80