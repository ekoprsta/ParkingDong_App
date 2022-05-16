'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.MemberParking, {foreignKey: "userId"})
      User.belongsTo(models.MemberRegistration, {foreignKey: "registrationId"})
      User.belongsToMany(models.ParkingSpace,{through: "MemberParking", as: "parkingSpace", foreignKey: "userId"})
    }
  }
  User.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Wrong email format"
        },
        notNull: {
          msg: "Email cannot be empty"
        },
        notEmpty: {
          msg: "Email cannot be an empty string"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "password cannot be empty"
        },
        notEmpty: {
          msg: "password cannot be an empty string"
        },
        isMoreThan4Carracter(value){
          if(value.length < 5){
            throw new Error('Password minimal 5 caracter')
          }
        }
      }
    },
    role:{
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    registrationId: DataTypes.INTEGER,
  }, 
  {
    sequelize,
    modelName: 'User'
  });
  return User;
};