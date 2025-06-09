import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";
import User from "./user.model.js";
import Product from "./product.model.js";

const Order = sequelize.define("Order", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Relasi
User.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(User, { foreignKey: "userId" });

Product.hasMany(Order, { foreignKey: "productId" });
Order.belongsTo(Product, { foreignKey: "productId" });

export default Order;
