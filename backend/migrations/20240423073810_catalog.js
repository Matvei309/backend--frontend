/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("catalog", (table) => {
    table.increments("id");
    table.string("name", 255).notNullable().unique();
    table.string("description", 255).notNullable();
    table.string("tag", 255).notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("catalog")
};
