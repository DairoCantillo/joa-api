import express from "express";
import routes from "./routers";
import config from "./config";

const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
