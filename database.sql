create database serverapi;
use serverapi;
# drop database serverapi;
create table user
(
    id              varchar(64) primary key,
    docType         varchar(100),
    createdAt       varchar(100),
    updatedAt       varchar(100),
    deletedAt       varchar(100),
    `code`          varchar(100),
    firstName       varchar(100),
    jobPositionName varchar(100),
    phone           varchar(100),
    lastName        varchar(100),
    email           varchar(100),
    username        varchar(100),
    `password`      varchar(100),
    workUnitId      varchar(100)
);
create table role
(

    id        varchar(64) primary key,
    docType   varchar(100),
    createdAt varchar(100),
    updatedAt varchar(100),
    deletedAt varchar(100),
    `name`    varchar(100),
    type      varchar(100)
);
create table permission
(
    id        varchar(64) primary key,
    docType   varchar(100),
    createdAt varchar(100),
    updatedAt varchar(100),
    deletedAt varchar(100),
    type      varchar(100),
    `name`    varchar(100),
    `code`    varchar(100)
);
create table organization
(
    id        varchar(100) primary key,
    docType   varchar(100),
    createdAt varchar(100),
    updatedAt varchar(100),
    deletedAt varchar(100),
    name      varchar(100),
    parentId  varchar(100),
    path      varchar(100),
    totalUser varchar(100)
);

create table org_user
(
    org_id  varchar(100),
    user_id varchar(100),
    primary key (org_id, user_id)
);
create table user_role
(
    role_id varchar(100),
    user_id varchar(100),
    primary key (role_id, user_id)
);
create table role_permission
(
    role_id       varchar(100),
    permission_id varchar(100),
    primary key (role_id, permission_id)
);
alter table org_user
    add foreign key (org_id) references organization (id);
alter table org_user
    add foreign key (user_id) references user (id);
alter table user_role
    add foreign key (role_id) references role (id);
alter table user_role
    add foreign key (user_id) references user (id);
alter table role_permission
    add foreign key (role_id) references role (id);
alter table role_permission
    add foreign key (permission_id) references permission (id);