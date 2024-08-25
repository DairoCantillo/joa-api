import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();
const prismaClient = new PrismaClient();

router.get("/shorturls", async (_req, res) => {
  const shortUrls = await prismaClient.shortUrl.findMany();
  try {
    res.status(200).json(shortUrls);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/shorturls", async (req, res) => {
  try {
    const newShortUrls = await prismaClient.shortUrl.create({
      data: req.body,
    });
    res.json(newShortUrls);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/shorturls", async (req, res) => {
  try {
    const updatedShortUrls = await prismaClient.shortUrl.update({
      where: { id: req.body.id },
      data: req.body,
    });
    res.status(200).json(updatedShortUrls);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/shorturls", async (req, res) => {
  try {
    const deletedShortUrls = await prismaClient.shortUrl.delete({
      where: { id: req.body.id },
    });
    res.status(200).json(deletedShortUrls);
  } catch (error) {
    console.error(error);
    res.status(404).send("not found");
  }
});

router.get("/shorturls/:id", async (req, res) => {
  try {
    const shortUrl = await prismaClient.shortUrl.findUniqueOrThrow({
      where: { id: req.params.id },
    });
    res.status(200).json(shortUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
export default router;
