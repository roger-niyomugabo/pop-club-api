import { DataTypes } from "sequelize";
import sequelize from "../dbConfig";

// This is a model example to refer to when creating your actual models
const PupClub = sequelize.define("User", {
  id: {
    allowNull: false,
    defaultValue: DataTypes.literal("gen_random_uuid()"),
    primaryKey: true,
    type: DataTypes.UUID,
  },
  service: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  province: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  house: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  isPhoneUsedForWhatsapp: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  dogName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dogBreed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dogName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dogAge: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  dogSex: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  neutered: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  vetName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // is it phone?
  vetContact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  healthProblems: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  dogHealthProblems: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  concerningBehavior: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  stateConcerningBehavior: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trained: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  obidientOnLeash: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  foodAggression: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  howOftenDoYouWalkYourDog: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  howLongDoYouWalkYourDog: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  crateTrained: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  howLongDoesDogSpendInCrate: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

export default PupClub;
