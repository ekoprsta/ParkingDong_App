'use strict';
const{ hashingPassword } = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MemberRegistration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MemberRegistration.hasOne(models.User, {foreignKey: "registrationId"})
    }
  }
  MemberRegistration.init({
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
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MemberRegistration',
    hooks: {
      beforeCreate : (user, options) =>  {
        user.password = hashingPassword(user.password)
      }
    }
  });
  return MemberRegistration;
};