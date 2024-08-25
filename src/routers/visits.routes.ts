import { Router } from "express";

const router = Router();

router.get("/visits", (_, res) => {
  res.send("visits route");
});

router.post("/visits/:id", (_, res) => {
  res.send("visits route");
});

router.post("/visits", (_, res) => {
  res.send("visits route");
});

router.put("/visits", (_, res) => {
  res.send("visits route");
});

router.delete("/visits", (_, res) => {
  res.send("visits route");
});

export default router;
