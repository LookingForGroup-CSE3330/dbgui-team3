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

## GUI Info ##
### Following is documentation for all fields in tables inside the database db. Use this accordingly to create views ###

### db.users ###
* usr_id: primary key. not null, auto-incremented (meaning it will automatically assign a sequentially appropriate value when none is given).
* username: not null, string 45 characters.
* password_p: not null, string 45 characters.
* about_me: string 300 characters.
* up_votes: int.
* down_votes: int.
* profile_img: string 45.
* email: string 45.
* credentials: string 45.

### db.roles ###
* role_id: primary key. not null, auto-incremented.
* role_name: string 20, not null.

### db.user_roles ###
* user_role_id: primary key. not null, auto-incremented.
* usr_id: int, not null
* role_id: int, not null

### db.posts ###
* post_id: primary key. not null, auto-incremented.
* user_id: int, not null.
* creation_date: string 45, not null.
* viewCount: int.
* answer_count: int, not null.
* question: string 200, not null.
* tags: string 45.
* up_votes: int, not null. default val = 0

### db.answers ###
* answer_id: primary key. not null, auto-incremented.
* post_id: int, not null.
* user_id: int, not null.
* date: string 45.
* answer: string 600, not null.
* up_votes: int, not null. default val = 0
* down_votes: int, not null. default val = 0

### db.tags ###
* tag_id: primary, not null, auto-incremented.
* tag_name: string 20, not null.

### db.post_tags ###
* id: primary, not null, auto-incremented.
* post_id: int, not null.
* tag_id: int not null.