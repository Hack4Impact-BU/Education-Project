const express = require("express");
const app = express();
const PORT = 8080; 

app.get("/", (req, res) => {
    return res.send("Welcome to our server");
})

app.listen(PORT, () => {
    console.log("Your server is listening on port", PORT)
})