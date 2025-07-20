# ---------- Stage 1: Build ----------
FROM node:18-alpine as build

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .
RUN npm run build

# ---------- Stage 2: Serve using Nginx ----------
FROM nginx:stable-alpine as production

# Clean default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build artifacts
COPY --from=build /app/build /usr/share/nginx/html

# ✅ Modify Nginx default config to listen on port 3001
RUN sed -i 's/listen\s\+80;/listen 3001;/' /etc/nginx/conf.d/default.conf

# Expose custom port
EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]
