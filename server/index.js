const express = require("express");
const app = express();
const PORT = 8080; 

const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');


// HASHING PASSWORDS: https://medium.com/technoetics/handling-user-login-and-registration-using-nodejs-and-mysql-81b146e37419
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'Penelope1595',
	database : 'education-project'
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
app.post('/auth', function(request, response) {
	var email = request.body.email;
	var password = request.body.password;
	if (email && password) {
		connection.query('SELECT * FROM Students WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.email = email;
				response.redirect('/home');
			} else {
				response.send('Incorrect Email and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username/Email and Password!');
		response.end();
	}
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(PORT, () => {
    console.log("Your server is listening on port", PORT)
})

app.listen(3000);