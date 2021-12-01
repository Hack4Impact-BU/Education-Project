const express = require("express");
const app = express();
const PORT = 8080;
const cors = require('cors');
const mysql = require('mysql');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tutorregistration'
})


app.get("/", (req, res) => {
    return res.send("Welcome to our server");
})


const CheckTables = false;

app.post("/tutorRegistration", (req, res) => {

    const data = req.body;

    console.log(data)

    for (var key in data) {
        if (data[key] === null || data[key] === "") {

            if (key === "hearAbtUs") continue;

            console.log("Missing field: " + key);
            console.log("value: " + data[key]);
            res.send("Missing fields");
            return;
        }
    }

    const { firstName, lastName, email, phone, school } = req.body;
    const { state, field, profession, transcript, resume, employment } = req.body;
    const { hearAbtUs, timezone } = req.body


    var subjects = "";
    var languages = "";
    var gradelevels = "";

    for (var [key, value] of Object.entries(req.body.subjects)) {
        if (value) { subjects += key + " " }
    }

    for (var [key, value] of Object.entries(req.body.languages)) {
        if (value) { languages += key + " " }
    }

    for (var [key, value] of Object.entries(req.body.gradeLevels)) {
        if (value) { gradelevels += key + " " }
    }


    const dateTime = new Date();


    const school_id = "0000";

    const create_Teacher_GFormData = `CREATE TABLE IF NOT EXISTS ID${school_id}_GFormData( 
        TeacherID VARCHAR(255),
        TeacherFirstName VARCHAR(255),
        TeacherLastName VARCHAR(255),
        TeacherEmail VARCHAR(255),
        SchoolsTeacherID VARCHAR(255),
        SchoolID VARCHAR(255)
    )`;

    const create_TEP02_Tutor_GFormData = `CREATE TABLE IF NOT EXISTS TEP02_Tutor_GFormData(
        TutorID VARCHAR(255),
        TutorFirstName VARCHAR(255),
        TutorLastName VARCHAR(255),
        TutorSubjects VARCHAR(255),
        TutorGradeLevel VARCHAR(255),
        TutorTimeZone VARCHAR(255),
        TutorLanguage VARCHAR(255),
        TutorRegistrationDate DATETIME
    )`;

    const create_TEP02_Tutor_SFormData = `CREATE TABLE IF NOT EXISTS TEP02_Tutor_SFormData(
        TutorID VARCHAR(255),
        TutorSchool VARCHAR(255),
        TutorFieldOfStudy VARCHAR(255)
    )`;

    const create_TEP02_Tutor_JFormData = `CREATE TABLE IF NOT EXISTS TEP02_Tutor_JFormData(
        TutorID VARCHAR(255),
        TutorProfession VARCHAR(255)
    )`;

    const create_TEP02_Tutor_DFormData = `CREATE TABLE IF NOT EXISTS TEP02_Tutor_DFormData(
        TutorID VARCHAR(255),
        TranscriptDocID VARCHAR(255),
        EmploymentDocID VARCHAR(255),
        ResumeDocID VARCHAR(255)
    )`;

    const create_TEP02_Tutor_EFormData = `CREATE TABLE IF NOT EXISTS TEP02_Tutor_EFormData(
        TutorID VARCHAR(255),
        TutorEmail VARCHAR(255)
    )`;

    const create_TEP02_Tutor_PFormData = `CREATE TABLE IF NOT EXISTS TEP02_Tutor_PFormData(
        TutorID VARCHAR(255),
        TutorPhone VARCHAR(255)
    )`;

    const create_TEP02_Tutor_VFormData = `CREATE TABLE IF NOT EXISTS TEP02_Tutor_VFormData(
        TutorID VARCHAR(255),
        TutorVerificationStatus VARCHAR(255),
        TutorVerificationKey VARCHAR(255)
    )`;

    const create_Tutor_IFormData = `CREATE TABLE IF NOT EXISTS ID${school_id}_Tutor_IFormData( 
        TI_ID VARCHAR(128),
        TI_Date DATETIME,
        TI_StudentID VARCHAR(255),
        TI_TutorID VARCHAR(255),
        TI_AdminID VARCHAR(255),
        TI_Adminote VARCHAR(255),
        TI_AdminNotePrevious VARCHAR(255) 
    )`;

    const create_Step_Tutor_ReferenceCheck = `CREATE TABLE IF NOT EXISTS ID${school_id}_STEP_TUTOR_ReferenceCheck(
        ReferenceCheck_ID VARCHAR(255),
        ReferenceCheck_TutorID VARCHAR(255),
        ReferenceCheck_AdminID VARCHAR(255),
        ReferenceCheck_ReferenceDate VARCHAR(255),
        ReferenceCheck_Q1 LONGTEXT,
        ReferenceCheck_Q2 LONGTEXT,
        ReferenceCheck_Q3 LONGTEXT,
        ReferenceCheck_Q4 LONGTEXT,
        ReferenceCheck_Q5 LONGTEXT,
        ReferenceCheck_intervieweeOpinion LONGTEXT,
        ReferenceCheck_interviewerOpinion LONGTEXT,
        ReferenceCheck_Complete VARCHAR(255)
    )`;

    const tableInits = [
        create_TEP02_Tutor_GFormData,
        create_TEP02_Tutor_SFormData,
        create_TEP02_Tutor_JFormData,
        create_TEP02_Tutor_DFormData,
        create_TEP02_Tutor_EFormData,
        create_TEP02_Tutor_PFormData,
        create_TEP02_Tutor_VFormData,
    ];

    const insert_TEP02_Tutor_GFormData = `INSERT INTO TEP02_Tutor_GFormData (
        TutorID, 
        TutorFirstName, 
        TutorLastName,
        TutorSubjects,
        TutorGradeLevel,
        TutorTimeZone,
        TutorLanguage,
        TutorRegistrationDate
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    const insert_TEP02_Tutor_SFormData = `INSERT INTO TEP02_Tutor_SFormData (
        TutorID,
        TutorSchool,
        TutorFieldOfStudy
        ) VALUES (?, ? , ?)`;

    const insert_TEP02_Tutor_JFormData = `INSERT INTO TEP02_Tutor_JFormData (
        TutorID,
        TutorProfession
        ) VALUES (? , ?)`;

    const insert_TEP02_Tutor_DFormData = `INSERT INTO TEP02_Tutor_DFormData(
        TutorID,
        TranscriptDocID,
        EmploymentDocID,
        ResumeDocID
        ) VALUES (?, ?, ?, ?)`;

    const insert_TEP02_Tutor_EFormData = `INSERT INTO TEP02_Tutor_EFormData(
        TutorID,
        TutorEmail
        ) VALUES (?, ?)`;

    const insert_TEP02_Tutor_PFormData = `INSERT INTO TEP02_Tutor_PFormData(
        TutorID,
        TutorPhone
        ) VALUES (? , ?)`;

    const insert_TEP02_Tutor_VFormData = `INSERT INTO TEP02_Tutor_VFormData(
        TutorID,
        TutorVerificationStatus,
        TutorVerificationKey
        ) VALUES (? , ?, ?)`;

    con.connect(function (error) {
        if (error) {
            console.log("Can't connect to Database");
            throw error;
        }

        if (CheckTables) {
            tableInits.forEach((query, index) => {
                con.query(query, function (err, response) {
                    if (err) throw err;
                    console.log(`table ${index} found`);
                })
            })
        }

        const tutorID = "12345678"

        con.query(insert_TEP02_Tutor_GFormData, [
            tutorID,
            firstName,
            lastName,
            subjects,
            gradelevels,
            timezone,
            languages,
            dateTime
        ], (dberr, dbres) => {
            if (dberr) throw dberr;
            console.log("Insert into TEP02_Tutor_GFormData succesful");
        });

        con.query(insert_TEP02_Tutor_SFormData, [
            tutorID,
            school,
            field
        ], (dberr, dbres) => {
            if (dberr) throw dberr;
            console.log("Insert into TEP02_Tutor_SFormData succesful");
        })

        con.query(insert_TEP02_Tutor_JFormData, [
            tutorID,
            profession
        ], (dberr, dbres) => {
            if (dberr) throw dberr;
            console.log("Insert into TEP02_Tutor_JFormData succesful");
        })

        const transcriptDocID = "0001";
        const employmentDocID = "0002";
        const resumeDocID = "0003";

        con.query(insert_TEP02_Tutor_DFormData, [
            tutorID,
            transcriptDocID,
            employmentDocID,
            resumeDocID
        ], (dberr, dbres) => {
            if (dberr) throw dberr;
            console.log("Insert into TEP02_Tutor_DFormData succesful");
        })

        con.query(insert_TEP02_Tutor_EFormData, [
            tutorID,
            email
        ], (dberr, dbres) => {
            if (dberr) throw dberr;
            console.log("Insert into TEP02_Tutor_EFormData succesful");
        })

        con.query(insert_TEP02_Tutor_PFormData, [
            tutorID,
            phone
        ], (dberr, dbres) => {
            if (dberr) throw dberr;
            console.log("Insert into TEP02_Tutor_PFormData succesful");
        })

        const tutorVerificationKey = "1234";

        con.query(insert_TEP02_Tutor_VFormData, [
            tutorID,
            "not verified",
            tutorVerificationKey
        ], (dberr, dbres) => {
            if (dberr) throw dberr;
            console.log("Insert into TEP02_Tutor_VFormData succesful");
        })


    });

    res.send("Great Sucess");
})






app.listen(PORT, () => {
    console.log("Your server is listening on port", PORT)
})