FROM nginx:1-alpine

RUN apk update \
  # nodejs 
  && apk add nodejs npm

WORKDIR /app

# Copy app files.
COPY ./frontend/ /app

RUN rm -rf /usr/share/nginx/html/*

RUN cd /app && npm ci && npm run docker