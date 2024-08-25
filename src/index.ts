import express from "express";

const app = express();
const port = 3000;

import { Response } from "express";

app.get("/", (_req, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
