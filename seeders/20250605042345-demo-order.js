"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert("orders", [
    {
      userId: 22,
      productId: 2,
      quantity: 2,
      totalPrice: 500000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 23,
      productId: 1,
      quantity: 1,
      totalPrice: 500000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 24,
      productId: 3,
      quantity: 3,
      totalPrice: 900000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("orders", null, {});
}
