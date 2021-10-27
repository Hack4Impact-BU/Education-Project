CREATE DATABASE IF NOT EXISTS education_project;
USE education_project;

DROP TABLE IF EXISTS Sessions CASCADE;
DROP TABLE IF EXISTS Students CASCADE;
DROP TABLE IF EXISTS Tutors CASCADE;


CREATE TABLE Students(
 student_id INTEGER AUTO_INCREMENT,
 first_name VARCHAR(100) NOT NULL,
 last_name VARCHAR(100) NOT NULL,
 email VARCHAR(100) UNIQUE NOT NULL,
 password VARCHAR(100) NOT NULL,
 parent_first_name VARCHAR(100) NOT NULL,
 parent_last_name VARCHAR(100) NOT NULL,
 parent_email VARCHAR(255) NOT NULL,
 parent_phone_number VARCHAR(15) NOT NULL,
 grade VARCHAR(100) NOT NULL,
 age INTEGER NOT NULL,
 state VARCHAR(100) NOT NULL,
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
 heard_from_note MEDIUMTEXT,
 agree_terms BOOL,
 agree_privacy BOOL,
 PRIMARY KEY (student_id)
 );
 
 CREATE TABLE Tutors(
 tutor_id INTEGER AUTO_INCREMENT,
 first_name VARCHAR(100) NOT NULL,
 last_name VARCHAR(100) NOT NULL,
 email VARCHAR(100) UNIQUE NOT NULL,
 college VARCHAR(100) NOT NULL,
 field_study VARCHAR(100),
 title VARCHAR(100),
 
 password VARCHAR(100) NOT NULL,
 phone_number VARCHAR(15) NOT NULL,
 state VARCHAR(100) NOT NULL,
 
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
 elementary BOOL,
 middle_school BOOL,
 high_school BOOL,
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
 transcript BLOB,
 proof_employment BLOB,
 resume_file BLOB,
 
 heard_from_note MEDIUMTEXT,
 agree_terms BOOL,
 agree_privacy BOOL,
 agree_tutor BOOL,
 PRIMARY KEY (tutor_id)
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
 REFERENCES Students(student_id),
 
 FOREIGN KEY (tutor_id)
 REFERENCES Tutors(tutor_id)
 )
 