<<<<<<< HEAD
drop database practice;
create database practice;
use practice;
CREATE TABLE IF NOT EXISTS users (
type varchar(25),
description varchar(25),
user_id varchar( 30 ),
loginname varchar( 30 ),
password varchar( 30 ),
username varchar ( 30 ),
gender varchar (1),
age int NOT NULL );
insert into users (type, description) values ('Table', 'Master list of users');
CREATE TABLE IF NOT EXISTS questions (
type varchar(25),
description varchar(25),
post_id varchar (30),
owner_user_id varchar (30),
subject varchar (30),
body varchar(240),
tags varchar(60),
creation_date varchar(30),
owner_usernname varchar (30),
upvote_count int,
downvote_count int
);
insert into questions (type, description) values ('Table:', 'Questions asked by users');
CREATE TABLE IF NOT EXISTS responses (
type varchar(25),
description varchar(25),
post_id varchar (30),
Doctor_user_id varchar (30),
upvote_count int,
downvote_count int,
response_date varchar(30),
Doctor_name varchar (30),
response_body varchar (240)
);
insert into responses (type, description) values ('Table:', 'Doctor user id connected responses');
CREATE TABLE IF NOT EXISTS doctors (
type varchar(25),
description varchar(25),
Doctor_user_id varchar (30) NOT NULL,
doctor_name varchar (30) NOT NULL,
specialty varchar (30) NOT NULL,
education varchar (240) NOT NULL,
medical_license varchar (120) NOT NULL
);
insert into doctors (type, description) values ('Table:', 'A list of doctors who responde to questions on this website.');
=======
CREATE TABLE `db`.`users` (
  `usr_id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password_p` VARCHAR(45) NOT NULL,
  `about_me` VARCHAR(300) NULL,
  `up_votes` INT NULL,
  `down_votes` INT NULL,
  `profile_img` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `credentials` VARCHAR(45) NULL,
  PRIMARY KEY (`usr_id`));

ALTER TABLE `db`.`users` 
CHANGE COLUMN `usr_id` `usr_id` INT(11) NOT NULL AUTO_INCREMENT ;

INSERT INTO `db`.`users` (`usr_id`, `username`, `password_p`, `about_me`) VALUES ('1111', 'username1111', 'password1111', 'this profile is for user11111');
INSERT INTO `db`.`users` (`usr_id`, `username`, `password_p`, `about_me`) VALUES ('2222', 'username2222', 'password2222', 'this profile is for user2222');
INSERT INTO `db`.`users` (`usr_id`, `username`, `password_p`, `about_me`) VALUES ('3333', 'usernamae3333', 'password3333', 'this profile is for user3333');
INSERT INTO `db`.`users` (`usr_id`, `username`, `password_p`, `about_me`) VALUES ('4444', 'usrname4444', 'password4444', 'this profile is for user4444');
INSERT INTO `db`.`users` (`usr_id`, `username`, `password_p`, `about_me`) VALUES ('5555', 'username5555', 'password5555', 'this profile is for user5555');
INSERT INTO `db`.`users` (`usr_id`, `username`, `password_p`, `about_me`, `up_votes`, `down_votes`, `credentials`) VALUES ('7777', 'username7777', 'password7777', 'profile doctor7777', '77', '7', 'M.D University of AAAA');
INSERT INTO `db`.`users` (`usr_id`, `username`, `password_p`, `about_me`, `up_votes`, `down_votes`, `credentials`) VALUES ('8888', 'username8888', 'password8888', 'profile doctor8888', '88', '8', 'M.D University of BBBB');
INSERT INTO `db`.`users` (`usr_id`, `username`, `password_p`, `about_me`, `up_votes`, `down_votes`) VALUES ('9999', 'usrname9999', 'password9999', 'profile doctor 9999', '99', '9');
INSERT INTO `db`.`users` (`usr_id`, `username`, `password_p`, `about_me`, `profile_img`, `email`) VALUES ('1000', 'username0000', 'password0000', 'profile for admin0000', 'www.tempurl/v1', 'admin0@ex.com');
INSERT INTO `db`.`users` (`usr_id`, `username`, `password_p`, `about_me`, `profile_img`) VALUES ('1001', 'username0001', 'password0001', 'profile for admin0001', 'www.tempurl2/v1');

CREATE TABLE `db`.`roles` (
  `role_id` INT NOT NULL,
  `role_name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`role_id`));

ALTER TABLE `db`.`roles` 
CHANGE COLUMN `role_id` `role_id` INT(11) NOT NULL AUTO_INCREMENT ;

INSERT INTO `db`.`roles` (`role_id`, `role_name`) VALUES ('1000', 'doctor');
INSERT INTO `db`.`roles` (`role_id`, `role_name`) VALUES ('2000', 'general_user');
INSERT INTO `db`.`roles` (`role_id`, `role_name`) VALUES ('3000', 'admin');

CREATE TABLE `db`.`user_roles` (
  `user_role_id` INT NOT NULL,
  `usr_id` INT NOT NULL,
  `role_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_role_id`));

ALTER TABLE `db`.`user_roles` 
CHANGE COLUMN `user_role_id` `user_role_id` INT(11) NOT NULL AUTO_INCREMENT ;

ALTER TABLE `db`.`user_roles` 
CHANGE COLUMN `role_id` `role_id` INT NOT NULL ;

INSERT INTO `db`.`user_roles` (`user_role_id`, `usr_id`, `role_id`) VALUES ('1', '1111', '2000');
INSERT INTO `db`.`user_roles` (`user_role_id`, `usr_id`, `role_id`) VALUES ('2', '2222', '2000');
INSERT INTO `db`.`user_roles` (`user_role_id`, `usr_id`, `role_id`) VALUES ('3', '3333', '2000');
INSERT INTO `db`.`user_roles` (`user_role_id`, `usr_id`, `role_id`) VALUES ('4', '4444', '2000');
INSERT INTO `db`.`user_roles` (`user_role_id`, `usr_id`, `role_id`) VALUES ('5', '5555', '2000');
INSERT INTO `db`.`user_roles` (`user_role_id`, `usr_id`, `role_id`) VALUES ('6', '7777', '1000');
INSERT INTO `db`.`user_roles` (`user_role_id`, `usr_id`, `role_id`) VALUES ('7', '8888', '1000');
INSERT INTO `db`.`user_roles` (`user_role_id`, `usr_id`, `role_id`) VALUES ('8', '9999', '1000');
INSERT INTO `db`.`user_roles` (`user_role_id`, `usr_id`, `role_id`) VALUES ('9', '1000', '3000');
INSERT INTO `db`.`user_roles` (`user_role_id`, `usr_id`, `role_id`) VALUES ('10', '1001', '3000');

CREATE TABLE `db`.`posts` (
  `post_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `creation_date` VARCHAR(45) NOT NULL,
  `viewCount` INT NULL,
  `answer_count` INT NOT NULL,
  `question` VARCHAR(200) NOT NULL,
  `tags` VARCHAR(45) NULL,
  PRIMARY KEY (`post_id`));

ALTER TABLE `db`.`posts` 
CHANGE COLUMN `post_id` `post_id` INT(11) NOT NULL AUTO_INCREMENT ;

INSERT INTO `db`.`posts` (`post_id`, `user_id`, `creation_date`, `viewCount`, `answer_count`, `question`) VALUES ('1', '1111', '1/31/2000', '5', '2', 'This is a sample question, question 1?');
INSERT INTO `db`.`posts` (`post_id`, `user_id`, `creation_date`, `viewCount`, `answer_count`, `question`) VALUES ('2', '2222', '4/20/2020', '7', '3', 'This is a sample question. question2?');

CREATE TABLE `db`.`answers` (
  `answer_id` INT NOT NULL,
  `post_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `date` VARCHAR(45) NULL,
  `answer` VARCHAR(600) NOT NULL,
  PRIMARY KEY (`answer_id`));

ALTER TABLE `db`.`answers` 
CHANGE COLUMN `answer_id` `answer_id` INT(11) NOT NULL AUTO_INCREMENT ;


INSERT INTO `db`.`answers` (`answer_id`, `post_id`, `user_id`, `date`, `answer`) VALUES ('1', '1', '7777', '4/17/20', 'When you create a volume, it is stored within a directory on the Docker host. When you mount the volume into a container, this directory is what is mounted into the container. This is similar to the way that bind mounts work, except that volumes are managed by Docker and are isolated from the core functionality of the host machine1111');
INSERT INTO `db`.`answers` (`answer_id`, `post_id`, `user_id`, `date`, `answer`) VALUES ('2', '1', '8888', '4/18/20', 'When you create a volume, it is stored within a directory on the Docker host. When you mount the volume into a container, this directory is what is mounted into the container. This is similar to the way that bind mounts work, except that volumes are managed by Docker and are isolated from the core functionality of the host machine2222');
INSERT INTO `db`.`answers` (`answer_id`, `post_id`, `user_id`, `date`, `answer`) VALUES ('3', '2', '7777', '4/19/20', 'When you create a volume, it is stored within a directory on the Docker host. When you mount the volume into a container, this directory is what is mounted into the container. This is similar to the way that bind mounts work, except that volumes are managed by Docker and are isolated from the core functionality of the host machine3333');
INSERT INTO `db`.`answers` (`answer_id`, `post_id`, `user_id`, `date`, `answer`) VALUES ('4', '2', '8888', '4/17/20', 'When you create a volume, it is stored within a directory on the Docker host. When you mount the volume into a container, this directory is what is mounted into the container. This is similar to the way that bind mounts work, except that volumes are managed by Docker and are isolated from the core functionality of the host machine4444');
INSERT INTO `db`.`answers` (`answer_id`, `post_id`, `user_id`, `date`, `answer`) VALUES ('5', '2', '9999', '4/20/20', 'When you create a volume, it is stored within a directory on the Docker host. When you mount the volume into a container, this directory is what is mounted into the container. This is similar to the way that bind mounts work, except that volumes are managed by Docker and are isolated from the core functionality of the host machine5555');

CREATE TABLE `db`.`tags` (
  `tag_id` INT NOT NULL,
  `tag_name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`tag_id`));

ALTER TABLE `db`.`tags` 
CHANGE COLUMN `tag_id` `tag_id` INT(11) NOT NULL AUTO_INCREMENT ;

INSERT INTO `db`.`tags` (`tag_id`, `tag_name`) VALUES ('1', 'tagA');
INSERT INTO `db`.`tags` (`tag_id`, `tag_name`) VALUES ('2', 'tagB');
INSERT INTO `db`.`tags` (`tag_id`, `tag_name`) VALUES ('3', 'tagC');
INSERT INTO `db`.`tags` (`tag_id`, `tag_name`) VALUES ('4', 'tagD');

CREATE TABLE `db`.`post_tags` (
  `id` INT NOT NULL,
  `post_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `db`.`post_tags` 
CHANGE COLUMN `id` `id` INT(11) NOT NULL AUTO_INCREMENT ;

INSERT INTO `db`.`post_tags` (`id`, `post_id`, `tag_id`) VALUES ('1', '1', '1');
INSERT INTO `db`.`post_tags` (`id`, `post_id`, `tag_id`) VALUES ('2', '2', '2');
INSERT INTO `db`.`post_tags` (`id`, `post_id`, `tag_id`) VALUES ('3', '1', '3');
INSERT INTO `db`.`post_tags` (`id`, `post_id`, `tag_id`) VALUES ('4', '2', '4');
INSERT INTO `db`.`post_tags` (`id`, `post_id`, `tag_id`) VALUES ('5', '1', '5');
>>>>>>> d1f1461fdba72d85d8eaa9b45b4688e0f2086b6b
