exports.up = function(knex, Promise) {
    return knex.schema.createTable("cohort", function(cohort){
        cohort.increments();
        cohort.integer("business_unit_id").references("id").inTable("business_unit");
        cohort.integer("learn_id");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("cohort");
};
