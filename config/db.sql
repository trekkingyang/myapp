create table list(
id int auto_increment primary key,
title varchar(100) not null,
thumb varchar(200) not null,
type char(10) not null,
category char(20) not null ,
advertisement boolean not null default 0,
source char(30),
content text,
video_id char(20),
images varchar(500),
clicktimes int default 0,
createtime timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP) ;
create table clickRecord(
    id int auto_increment primary key,
    deviceId varchar(200),
    detailId int,
    updatetime timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
create table favor(
    id int auto_increment primary key,
    deviceId varchar(200),
    detailId int,
    updatetime timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
create table category(
id int auto_increment primary key,
cate_name char(40) not null,
cate_desc char(40) not null,
cate_sort int not null default 0
);
alter table list convert to character set utf8mb4 collate utf8mb4_bin

