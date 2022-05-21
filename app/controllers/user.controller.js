const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	if (!req.body.email) {
		res.status(400).send({
			message: "Email cannot be empty!",
		});
		return;
	}

	birthday = req.body.birthday;
	birthday = new Date(
		birthday.substr(0, 4),
		birthday.substr(4, 2) - 1,
		birthday.substr(6, 2)
	);
	now = new Date();
	age = now.getYear() - birthday.getYear();

	const user = {
		email: req.body.email,
		// TODO: Add encryption function
		password: req.body.password,
		name: req.body.name,
		gender: req.body.gender,
		birthday: birthday,
		isAdmin: req.body.isAdmin,
		age: age,
	};
	console.log(user);
	User.create(user)
		.then((data) => {
			res.send(data);
		})
		.catch(() => {
			res.status(500).send({
				message: "InternalServerError",
			});
		});
};

exports.retrieve = (req, res) => {
	const id = req.params.id;
	User.findByPk(id)
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({ message: "ResourceNotFound" });
			}
		})
		.catch(() => {
			res.status(500).send({ message: "InternalServerError" });
		});
};

exports.retrieveList = (req, res) => {
	User.findAll({ where: null })
		.then((data) => {
			res.send(data);
		})
		.catch(() => {
			res.status(500).send({
				message: "InternalServerError",
			});
		});
};

exports.update = (req, res) => {
	const id = req.params.id;
	User.update(req.body, { where: { id: id } })
		.then((num) => {
			if (num == 1) {
				res.send({ message: "User was updated successfully." });
			} else {
				res.send({ message: `Cannot update User with id = ${id}.` });
			}
		})
		.catch(() => {
			res.status(500).send({ message: "InternalServerError" });
		});
};

exports.delete = (req, res) => {
	id = req.params.id;
	User.destroy({ where: { id: id } })
		.then((num) => {
			if (num == 1) {
				res.send({ message: "User was deleted successfully!" });
			} else {
				res.send({ message: `Cannot delete User with id=${id}.` });
			}
		})
		.catch(() => {
			res.status(500).send({ message: "InternalServerError" });
		});
};
