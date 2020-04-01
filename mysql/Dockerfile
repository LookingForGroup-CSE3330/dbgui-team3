FROM mysql:8

ENV MYSQL_DATABASE=db
ENV MYSQL_RANDOM_ROOT_PASSWORD=1

COPY ./init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306