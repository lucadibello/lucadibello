FROM node:14.1-alpine AS build

WORKDIR /app

# Expose ports
EXPOSE 80
EXPOSE 443

# Bundle APP files
COPY src/ src/
COPY public/ public/
COPY package.json .

# Install app dependencies
RUN npm install --production

# Set environment variables
ENV NODE_ENV production

# Build application 
RUN npm run build

# Move build files to nginx webserver directory
FROM nginx

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build app/build /usr/share/nginx/html
