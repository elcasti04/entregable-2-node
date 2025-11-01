import { DataTypes } from 'sequelize';
import db from '../db/conect.js';


export const User = db.define('users',{
    

  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: true
});