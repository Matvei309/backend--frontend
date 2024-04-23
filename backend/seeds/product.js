/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  return await knex('catalog').truncate()
  .then(() => {
    return knex.raw(`
      INSERT INTO catalog (name, description, tag)
      VALUES
      ('testData-1', 'test-description-1', 'test-tag'),
      ('testData-2', 'test-description-2', 'test-tag'),
      ('testData-3', 'test-description-3', 'test-tag'),
      ('testData-4', 'test-description-4', 'test-tag')
    `)
  })
};
