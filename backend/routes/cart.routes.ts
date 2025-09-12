import { Router } from "express";
import { Cart } from "../models/Cart";

const router = Router();

// GET cart items
router.get("/", async (req, res) => {
  const cart = await Cart.find().populate("productId");
  res.json(cart);
});

// POST add to cart
router.post("/", async (req, res) => {
  const { productId } = req.body;
  const existing = await Cart.findOne({ productId });

  if (existing) {
    existing.quantity += 1;
    await existing.save();
    return res.json(existing);
  }

  const item = await Cart.create({ productId, quantity: 1 });
  res.json(item);
});

// PUT update quantity
router.put("/:id", async (req, res) => {
  const { quantity } = req.body;
  const item = await Cart.findByIdAndUpdate(
    req.params.id,
    { quantity },
    { new: true }
  );
  res.json(item);
});

// DELETE item
router.delete("/:id", async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed" });
});

export default router;
