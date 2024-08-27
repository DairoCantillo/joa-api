import express from "express";
import routes from "./routers";
import port from "./config";

const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
