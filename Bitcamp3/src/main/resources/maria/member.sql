CREATE TABLE Test
(
   id      varchar(20),
   name    varchar(20),
   PRIMARY KEY(id)
);
select * from Test;

CREATE TABLE MEMBER
(id varchar(20),
 pass varchar(20),
 name varchar(20),
 ssn varchar(20),
 phone varchar(20),
 email varchar(20),
 profile varchar(20),
 addr varchar(20),
 PRIMARY KEY(id));
 
 select * from member where id like '장만호';
 
 insert into member values('장만호','1','장만호','911123-1111111','010-5604-1198','jmh3360@naver.com','default_image','광명');
 select * from member;
 INSERT INTO board(title, content, id)
     VALUES ('zz', 'xx', '장만호');
