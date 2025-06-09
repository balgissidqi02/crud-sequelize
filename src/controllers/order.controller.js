import Order from "../../models/order.model.js";
import User from "../../models/user.model.js";
import Product from "../../models/product.model.js";

export const getAllOrders = async (req, res) => {
  const orders = await Order.findAll({ include: [User, Product] });
  res.json(orders);
};

export const getOrderById = async (req, res) => {
  const order = await Order.findByPk(req.params.id, { include: [User, Product] });
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
};

export const createOrder = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  const product = await Product.findByPk(productId);
  if (!product) return res.status(400).json({ message: "Product not found" });

  const totalPrice = product.price * quantity;

  const order = await Order.create({ userId, productId, quantity, totalPrice });
  res.status(201).json(order);
};

export const updateOrder = async (req, res) => {
  const order = await Order.findByPk(req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });

  const { quantity } = req.body;
  const product = await Product.findByPk(order.productId);
  const totalPrice = product.price * quantity;

  await order.update({ quantity, totalPrice });
  res.json(order);
};

export const deleteOrder = async (req, res) => {
  const order = await Order.findByPk(req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  await order.destroy();
  res.json({ message: "Order deleted" });
};
