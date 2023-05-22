FROM node:14 AS builder
WORKDIR /app

COPY . .
RUN npm i 
RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY default.conf.template /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
