module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    ms1: DataTypes.STRING,
    ms2: DataTypes.STRING,
    ms3: DataTypes.STRING,
    ms4: DataTypes.STRING,
    ms5: DataTypes.STRING
  });
  return Example;
};