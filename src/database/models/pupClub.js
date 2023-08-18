import { DataTypes } from "sequelize";
import sequelize from "../dbConfig";

// This is a model example to refer to when creating your actual models
const PupClub = sequelize.define("User", {
  // Define your model attributes
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

export default PupClub;
