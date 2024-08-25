import express from "express";
import { ShortUrl, users, visits } from "./routers";

const port = 3000;
const app = express();

app.use(express.json());
app.use("/api", ShortUrl);
app.use("/api", users);
app.use("/api", visits);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
