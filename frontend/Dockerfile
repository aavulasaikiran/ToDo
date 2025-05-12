# ---------- Stage 1: Build ----------
FROM node:18-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .
RUN npm run build

# ---------- Stage 2: Serve using Nginx ----------
FROM nginx:stable-alpine as production

# Clean default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build artifacts
COPY --from=build /app/build /usr/share/nginx/html



EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
