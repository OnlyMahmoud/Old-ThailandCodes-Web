const http = require("http");
const tha = require("./tha.json");
const express = require("express");
const app = express();
const server = http.createServer(app);
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render('HomeBage', { bot: tha.website})
})

app.get("/vote", (req, res) => {
    res.render("vote", {bot: tha.website})
})

app.get("/server", (req, res) => {
    res.render("server", {bot: tha.website})
})

app.get("/anotherbot", (req, res) => {
    res.render("anotherbot", {bot: tha.website})
})


const listener = server.listen(8000, function() {
    console.log("Your app Is Listening on port " +listener.address().port);
})