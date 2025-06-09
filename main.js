import sequelize from "./utils/db.js";
import db from "./models/index.js";
import "./models/user.model.js";
import "./models/product.model.js";
import "./models/order.model.js";


(async () => {
  try {
    await sequelize.sync({ alter: true }); // Bisa diganti force: true untuk reset tabel
    console.log("Synced ✅");
  } catch (err) {
    console.error("Sync error ❌", err);
  }
})();
