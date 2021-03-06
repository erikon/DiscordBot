module.exports = (sequelize, DataTypes) => {
	return sequelize.define('types', {
    tid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true ,
    },
    message: DataTypes.STRING
	}, {
		timestamps: false,
	});
};
