import mongoose from "mongoose";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";
import { Product } from "../models/Product";

dotenv.config();

async function seedProducts() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log("MongoDB connected ✅");

    // Clear existing data
    await Product.deleteMany({});
    console.log("Old products cleared");

    const products = [];

    for (let i = 0; i < 20000; i++) {
      products.push({
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price({ min: 10, max: 500 })),
      });
    }

    await Product.insertMany(products);
    console.log("✅ 20,000 products added!");

    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding:", err);
    process.exit(1);
  }
}

seedProducts();
