// TODO: Refactor schema for analytics tracking
module.exports = (sequelize, DataTypes) => {
	return sequelize.define('users', {
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true ,
    },
    test: DataTypes.STRING
	}, {
		timestamps: false,
	});
};
