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
db.sequelize.sync({ force: true }).then(() => {
	console.log("Drop and re-sync db.");
});

app.get("/", (req, res) => {
	res.json({ message: "Welcome to king application." });
});
require("./app/routes/user.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
