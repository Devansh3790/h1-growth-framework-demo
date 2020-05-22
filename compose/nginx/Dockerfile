# Stage - 1
FROM node:12-alpine AS compile-image

# set working directory
WORKDIR /app

# install angular-cli globally
RUN npm install -g @angular/cli

# install and cache app dependencies
COPY ./frontend/package*.json  /app/
RUN npm install --silant

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY ./frontend /app/

RUN ng build --prod

# Stage - 2
FROM nginx:1-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=compile-image /app/dist/frontend/ /usr/share/nginx/html

EXPOSE 80