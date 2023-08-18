import http from "http";
import app from "./app";
import config from "./utils/config";
import sequelize from "./database/dbConfig";

const { PORT } = config;

let server = http.createServer(app);

// Synchronize the models with the database
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Sync all defined models to the database
    await sequelize
      .sync({
        alter: config.NODE_ENV === "development" ? true : false,
      })
      .then(async () => {
        console.log("Database synchronized successfully.");
      });

    // Load express app and start listening
    server = app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error on service startup:", error);
  }
})();
