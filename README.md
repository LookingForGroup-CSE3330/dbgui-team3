# Backend Development #
## backend documentation for people in DB as well as GUI for frictionless development/integration ##

> docker-compose up

to initialize and spin up the project

### mysql folder ###
* init.sql
* Dockerfile

init.sql is initialized the first time this project is spun up.
This project uses **mysql version 5.7** per advice from the TAs so DB people **make sure to change the mysql version in mysql/Dockerfile to 5.7**

In other words, line 10 in Dockerfile (mysql/Dockerfile) should like like below:
> FROM mysql:5.7

init.sql has pretty much everything we need to start things off so do not modify the file. If some extreme situation calls for the modification of init.sql, be sure to let everyone know in slack.

### node folder ###
This project attempts to follow the MVC principle with models and routes. For now the models folder is empty because all elementary CRUD operations can be done in routes with mysql statements.

server.js has simplified operations now since routes folder can handle most routing. 
server.js establishes connection with the mysql server and exports the connection object to routes. This is pretty much all server.js does now. All routing and endpoint connection will now be happening in routes folder.