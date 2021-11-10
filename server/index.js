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
    database: 'tutorReg'
})


app.get("/", (req, res) => {
    return res.send("Welcome to our server");
})


app.post("/tutorRegistration", (req, res) => {

    const { firstname, lastname, email, phone, school } = req.body;
    const { state, field, transcript, resume, employment, hearAbtUs } = req.body;

    var subjects = "";
    var languages = "";
    var gradelevels = "";

    for (const [key, value] of Object.entries(req.body.subjects)) {
        if (value) {
            subjects += ", " + key;
        }
    }

    for (const [key, value] of Object.entries(req.body.languages)) {
        if (value) {
            languages += ", " + key;
        }
    }

    for (const [key, value] of Object.entries(req.body.gradeLevels)) {
        if (value) {
            gradelevels += ", " + key;
        }
    }

    con.connect(err => {
        if (err) throw err;

        console.log("Connected");

        var sql = `INSERT INTO tutors (firstname, lastname, email, phone, school, 
                    state, field, subjects, languages, gradelevels, transcript, resume, employment) 
                VALUES (${firstname}, ${lastname}, ${email}, ${phone}, ${school},
                    ${state}, ${field}, ${subjects}, ${languages}, ${gradelevels},
                    ${transcript}, ${resume}, ${employment}, ${hearAbtUs})`

        con.query(sql, (error, response) => {
            if (err) throw err;
            console.log("tutor Added");
        })
    })





    res.send("Great Sucess");
})

app.listen(PORT, () => {
    console.log("Your server is listening on port", PORT)
})