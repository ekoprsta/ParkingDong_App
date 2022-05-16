'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NonMemberParking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NonMemberParking.belongsTo(models.ParkingSpace, {foreignKey: "locationId"})
    }
  }
  NonMemberParking.init({
    locationId: DataTypes.INTEGER,
    customerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    platNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'NonMemberParking',
  });
  return NonMemberParking;
};