module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("user", {
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		gender: {
			type: Sequelize.ENUM,
			values: ["male", "female", "third"],
		},
		birthday: {
			type: Sequelize.DATEONLY,
		},
		isAdmin: {
			type: Sequelize.BOOLEAN,
			default: false,
		},
		age: {
			type: Sequelize.INTEGER,
		},
	});
};
