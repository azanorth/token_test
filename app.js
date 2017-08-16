const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use(express.static(__dirname + "/src"));
// app.set("view engine", "html");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require("./src/routes")(app);

app.listen(8080, "127.0.0.1", (err) => {
	if(err) throw err;
	console.log("Server running at http://127.0.0.1:8080");
});