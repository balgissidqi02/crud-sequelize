import express from "express";
import logger from "./middlewares/logger.js";
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";
import orderRoutes from "./routes/order.routes.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(logger);

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Halo dari API CRUD!");
});

app.listen(port, () => {
  console.log(`Server jalan di http://localhost:${port}`);
});
