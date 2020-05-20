FROM python:3.7-alpine

ENV PYTHONUNBUFFERED 1

ARG BUILD_ENV=production

ENV PYTHONUNBUFFERED 1
# ENV PYTHONDONTWRITEBYTECODE 1

RUN apk update \
  # mysql dependencies
  && apk add --virtual  build-deps gcc python3-dev musl-dev \
  && apk add mariadb-dev \
  # CFFI dependencies
  && apk add libffi-dev py-cffi

RUN addgroup --system django \
    && adduser --system --ingroup django django

# Requirements are installed here to ensure they will be cached.
COPY ./requirements /requirements
RUN pip install -r /requirements/${BUILD_ENV}.txt \
    && rm -rf /requirements

COPY ./compose/backend/entrypoint /entrypoint
RUN sed -i 's/\r$//g' /entrypoint
RUN chmod +x /entrypoint
RUN chown django /entrypoint

COPY ./compose/backend/start /start
RUN sed -i 's/\r$//g' /start
RUN chmod +x /start
RUN chown django /start

COPY ./backend /app

RUN chown -R django /app


USER django

WORKDIR /app

ENTRYPOINT ["/entrypoint"]

EXPOSE 8000