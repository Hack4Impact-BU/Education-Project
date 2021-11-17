const express = require("express");
const app = express();
const PORT = 8080; 

const mysql = require('mysql')

// const db = mysql.createConnection({
//     user:"root",
//     host: "localhost",
//     password : "password"
//     database: "education_project",
// });

// app.get('/insert',(req,res) => {
//     db.query('/',[32], (err,result) => {

//     })
// })


app.get("/", (req, res) => {
    return res.send("Welcome to our server");
})

app.listen(PORT, () => {
    console.log("Your server is listening on port", PORT)
})