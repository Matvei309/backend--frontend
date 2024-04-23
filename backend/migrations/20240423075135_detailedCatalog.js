/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Detailed-catalog", (table) => {
        table.increments("id_name");
        table.string("description_1", 255);
        table.string("description_2", 255)
        table.string("description_3", 255)
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Detailed-catalog")
};
