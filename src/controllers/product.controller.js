import Product from "../../models/product.model.js";

export const getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: "Not found" });
  res.json(product);
};

export const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  const product = await Product.create({ name, price, stock });
  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: "Not found" });
  await product.update(req.body);
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: "Not found" });
  await product.destroy();
  res.json({ message: "Product deleted" });
};
