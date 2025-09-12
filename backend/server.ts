import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes";
import cartRoutes from "./routes/cart.routes";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Mongo connection
mongoose.connect(process.env.DATABASE_URL as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
