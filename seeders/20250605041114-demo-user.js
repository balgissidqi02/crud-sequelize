"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert("users", [
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Bob Smith",
      email: "bob@example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Charlie Brown",
      email: "charlie@example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("users", null, {});
}
