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