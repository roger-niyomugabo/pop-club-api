import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

import routes from "./routes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.enable("trust proxy");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", routes);

export default app;
