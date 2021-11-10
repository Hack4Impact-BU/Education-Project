CREATE DATABASE IF NOT EXISTS education_project;
USE education_project;

DROP TABLE IF EXISTS Sessions CASCADE;
DROP TABLE IF EXISTS Students CASCADE;
DROP TABLE IF EXISTS Tutors CASCADE;
DROP TABLE IF EXISTS Users CASCADE;

CREATE TABLE Users(
 user_id INTEGER AUTO_INCREMENT,
 first_name VARCHAR(100),
 last_name VARCHAR(100),
 username VARCHAR(100) UNIQUE NOT NULL,
 password VARCHAR(500) NOT NULL,
 phone_number VARCHAR(15),
 role_category VARCHAR(100),
 
 college VARCHAR(100) NOT NULL,
 field_study VARCHAR(100),
 title VARCHAR(100),
 
 parent_first_name VARCHAR(100),
 parent_last_name VARCHAR(100),
 parent_email VARCHAR(255),
 grade VARCHAR(100),
 
 age INTEGER,
 state VARCHAR(100),
 course_other VARCHAR(100),
 mathematics BOOL,
 biology BOOL,
 chemistry BOOL,
 physics BOOL,
 psychology BOOL,
 english BOOL,
 history_course BOOL,
 geography BOOL,
 computer_science BOOL,
 general_ed BOOL,
 english_spoken BOOL,
 spanish_spoken BOOL,
 mandarin_spoken BOOL,
 cantonese_spoken BOOL,
 hindi_spoken BOOL,
 tagalog_spoken BOOL,
 vietnamese_spoken BOOL,
 arabic_spoken BOOL,
 french_spoken BOOL,
 korean_spoken BOOL,
 russian_spoken BOOL,
 german_spoken BOOL,
 other_spoken VARCHAR(100),

 engineering BOOL,
 arts BOOL,
 business BOOL,
 communications BOOL,
 community_service BOOL,
 education BOOL,
 science BOOL,
 repairs BOOL,
 agriculture BOOL,
 government BOOL,
 law BOOL,
 health BOOL,
 sales BOOL,
 notes MEDIUMTEXT,
 
 transcript BLOB,
 proof_employment BLOB,
 resume_file BLOB,
 
 heard_from_note MEDIUMTEXT,
 agree_terms BOOL,
 agree_privacy BOOL,
 agree_tutor BOOL,
 
 PRIMARY KEY (user_id)
 );
 
 
 CREATE TABLE Sessions(
 student_id INTEGER,
 tutor_id INTEGER,
 date_of_session DATE,
 student_first_name VARCHAR(100),
 student_last_name VARCHAR(100),
 duration_minutes INTEGER,
 duration_hours INTEGER,
 notes MEDIUMTEXT,
 completed BOOL,
 course VARCHAR(100),
 
 PRIMARY KEY (student_id, tutor_id),
 
 FOREIGN KEY (student_id)
 REFERENCES Users(user_id),
 
 FOREIGN KEY (tutor_id)
 REFERENCES Users(user_id)
 )
 