"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert("products", [
    {
      name: "Keyboard Mechanical",
      price: 500000,
      stock: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Wireless Mouse",
      price: 250000,
      stock: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Laptop Stand",
      price: 300000,
      stock: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("products", null, {});
}
