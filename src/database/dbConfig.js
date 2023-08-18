import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

const sequelizeConfig = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "pupclub_db",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    dialect: "postgres",
  },
};

// Create a Sequelize instance
const sequelize = new Sequelize(
  sequelizeConfig[process.env.NODE_ENV || "development"]
);

export default sequelize;
