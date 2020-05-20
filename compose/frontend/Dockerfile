FROM node:12-alpine

RUN addgroup -S frontend \
    && adduser -S -G frontend frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install angular-cli globally
RUN npm install -g @angular/cli

# install and cache app dependencies
COPY ./frontend/package*.json  /app/
RUN npm install --silent

# Copy app files.
COPY ./frontend/ /app

# start app
COPY ./compose/frontend/start /start
RUN sed -i 's/\r//' /start
RUN chmod +x /start
RUN chown frontend /start

# set working directory
WORKDIR /app