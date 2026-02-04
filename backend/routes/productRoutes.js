import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { type, category } = req.query;

  const query = {};
  if (type) query.type = type;
  if (category && category !== "All") query.category = category;

  const products = await Product.find(query);
  res.json(products);
});


router.get("/popular", async (_, res) => {
  res.json(await Product.find({ isPopular: true }));
});

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    return res.status(404).json({ message: "Not found" });
  res.json(product);
});

export default router;
