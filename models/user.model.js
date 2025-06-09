import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
});

export default User;
