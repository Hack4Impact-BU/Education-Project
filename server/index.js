const express = require("express");
const app = express();
const PORT = 8080; 
const bodyParser = require("body-parser")

const mysql = require('mysql')
// https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-react-app-with-nodejs-bc06fa1c18f3


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


// place holder for the data
const users = [
    {
      firstName: "first1",
      lastName: "last1",
      email: "abc@gmail.com"
    },
    {
      firstName: "first2",
      lastName: "last2",
      email: "abc@gmail.com"
    },
    {
      firstName: "first3",
      lastName: "last3",
      email: "abc@gmail.com"
    }
  ];
  
  app.use(bodyParser.json());
//   app.use(express.static(path.join(__dirname, '../my-app/build')));
  
  app.get('/server/users', (req, res) => {
    console.log('server/users called!')
    res.json(users);
  });
  
  app.post('/server/user', (req, res) => {
    const user = req.body.user;
    console.log('Adding user:::::', user);
    users.push(user);
    res.json("user addedd");
  });
app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.get("/", (req, res) => {
    return res.send("Welcome to our server");
})

app.listen(PORT, () => {
    console.log("Your server is listening on port", PORT)
})