module.exports = (sequelize, DataTypes) => {
	const alias = "Users"
	const cols = {
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		category_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		birthdate: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		image_url: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		province_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		zip: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	}

	const config = {
		tableName: "users",
		timestamps: false,
	}

	const User = sequelize.define(alias, cols, config)

	return User
}
