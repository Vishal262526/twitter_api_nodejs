import express, { Express, Request, Response } from "express";
const app: Express = express();
import dotenv from "dotenv";
import routes from "./routes/index";

dotenv.config();

app.use(express.json());

app.use(routes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
