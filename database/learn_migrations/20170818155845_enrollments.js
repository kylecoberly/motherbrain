
exports.up = function(knex, Promise) {
  return knex.schema.createTable("enrollments", function(table){
      table.increments();
      table.integer("user_id").references("id").inTable("users");
      table.integer("cohort_id").references("id").inTable("cohorts");
      table.timestamp("created_at");
      table.timestamp("updated_at");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("enrollments");
};
