const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var corsOption = {
	origin: "http://localhost:8081",
};

const app = express();
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
	res.json({ message: "Welcome to king application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});