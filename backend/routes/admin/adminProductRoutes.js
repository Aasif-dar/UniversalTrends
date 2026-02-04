import express from "express";
import Product from "../../models/Product.js";
import protect from "../../middlewares/authMiddleware.js";
import adminOnly from "../../middlewares/adminMiddleware.js";
import upload from "../../middlewares/upload.js";

const router = express.Router();
router.post(
  "/",
  protect,
  adminOnly,
  upload.single("image"),
  async (req, res) => {
    try {
      console.log("BODY:", req.body);
      console.log("FILE:", req.file);

      const { name, price, type, category } = req.body;

      if (!name || !price || !type || !category) {
        return res.status(400).json({
          message: "Name, price, type and category are required",
        });
      }

      if (!req.file) {
        return res.status(400).json({ message: "Image required" });
      }

      const product = await Product.create({
        name,
        price,
        description: req.body.description,
        type,
        category,
        isPopular: req.body.isPopular === "true",
        image: `/uploads/${req.file.filename}`,
      });

      return res.status(201).json(product);

    } catch (error) {
      console.error("ADD PRODUCT ERROR:", error);
      return res.status(500).json({
        message: "Server error while adding product",
        error: error.message,
      });
    }
  }
);


// 🔴 ADMIN – GET ALL PRODUCTS (PRIVATE)
router.get("/", protect, adminOnly, async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});
router.delete("/:id", protect, adminOnly, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

export default router;
