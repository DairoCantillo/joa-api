import { Router } from "express";

const router = Router();

router.get("/users", (_, res) => {
  res.send("Users route");
});

router.get("/users/:id", (_, res) => {
  res.send("Users route");
});

router.post("/users", (_, res) => {
  res.send("Users route");
});

router.put("/users", (_, res) => {
  res.send("Users route");
});

router.delete("/users", (_, res) => {
  res.send("Users route");
});

export default router;
