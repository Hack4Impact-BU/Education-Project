const express = require("express");
const app = express();
const PORT = 8080; 

const mysql = require('mysql');

const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const path = require('path');
const cors = require("cors");  //5.2k (gzipped: 2.1k)

const bcrypt = require("bcrypt");
const saltRounds = 10


app.use(express.json());
app.use(cors({
	origin: ["http://localhost:3000"],
	methods: ["GET", "POST"],
	credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	session({
	  key: "userId",
	  secret: "subscribe",
	  resave: false,
	  saveUninitialized: false,
	  cookie: {
		expires: 60 * 60 * 24,
	  },
	})
  );

// HASHING PASSWORDS: https://medium.com/technoetics/handling-user-login-and-registration-using-nodejs-and-mysql-81b146e37419
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'PASSWORD',
	database : 'education-project'
});

app.post("/register", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	bcrypt.hash(password, saltRounds, (err, hash) => {
		
		if (err) {
			console.log(err)
		}

		db.query(
			"INSERT INTO Users (username, password) VALUES (?,?)",
			[username, hash],
			(err, result) => {
				console.log(err);
			}
		)
	})
	

}
);

app.get("/login", (req, res) => {
	if (req.session.user) {
	  res.send({ loggedIn: true, user: req.session.user });
	} else {
	  res.send({ loggedIn: false });
	}
  });

app.post("/login", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	db.query(
		"SELECT * FROM Users WHERE username = ?",
		username,
		(err, result) => {
			if (err){
				res.send({err: err});
			}

			if (result.length > 0) {
				bcrypt.compare(password, result[0].password, (err, response) => {
					if (response){
						req.session.user = result;
						console.log(req.session.user);
						res.send(result)
					} else{
						res.send({message: "Wrong Username or Password"});
				}});
			} else {
				res.send({ message: "User does not exist"});
			}
		}
	)
});


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



app.get('/', function(request, response) {
	return response.sendFile(path.join(__dirname + '/login.html'));
});
// app.post('/auth', function(request, response) {
// 	var email = request.body.email;
// 	var password = request.body.password;
// 	if (email && password) {
// 		connection.query('SELECT * FROM Students WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
// 			if (results.length > 0) {
// 				request.session.loggedin = true;
// 				request.session.email = email;
// 				response.redirect('/home');
// 			} else {
// 				response.send('Incorrect Email and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter Username/Email and Password!');
// 		response.end();
// 	}
// });

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page');
	}
	response.end();
});

app.listen(PORT, () => {
    console.log("Your server is listening on port", PORT)
})

app.listen(3000);

// app.listen(3001, () => {
// 	console.log("running server")});

