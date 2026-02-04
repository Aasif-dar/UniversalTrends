import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import adminProductRoutes from "./routes/admin/adminProductRoutes.js";
import adminOrderRoutes from "./routes/admin/adminOrderRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.use("/uploads", express.static("uploads"));

// PUBLIC / USER
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// ADMIN
app.use("/api/admin/products", adminProductRoutes);
app.use("/api/admin/orders", adminOrderRoutes);
app.listen(5000, () =>
  console.log("Server running on port 5000")
);

// 🔥 DEBUG LINE (IMPORTANT)
app.get("/ping", (req, res) => {
  res.send("Server alive");
});

const PORT = 5000;
async function server() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log("Server running on port", PORT);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

server();
