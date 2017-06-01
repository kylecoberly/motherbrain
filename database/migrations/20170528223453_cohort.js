exports.up = function(knex, Promise) {
    return knex.schema.createTable("cohort", function(cohort){
        cohort.increments();
        cohort.integer("business-unit-id").references("id").inTable("business-unit");
        cohort.integer("learn-id");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("cohort");
};
