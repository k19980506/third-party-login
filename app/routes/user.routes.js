module.exports = (app) => {
	const users = require("../controllers/user.controller");
	var router = require("express").Router();

	router.post("/", users.create);
	router.get("/", users.retrieveList);
	router.get("/:id", users.retrieve);
	router.put("/:id", users.update);
	router.delete("/:id", users.delete);

	app.use("/api/users", router);
};
