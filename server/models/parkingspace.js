'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ParkingSpace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ParkingSpace.hasMany(models.MemberParking, {foreignKey: "locationId"})
      ParkingSpace.hasMany(models.NonMemberParking, {foreignKey: "locationId"})
      ParkingSpace.belongsToMany(models.User, {through: "MemberParking", as: "User", foreignKey: "locationId"})
    }
  }
  ParkingSpace.init({
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ParkingSpace',
  });
  return ParkingSpace;
};