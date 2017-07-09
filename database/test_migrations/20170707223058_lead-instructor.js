exports.up = function(knex, Promise){
    return knex.schema.table("cohort", function(cohort){
        cohort.integer("lead_instructor_id").references("id").inTable("instructor");
    });
};

exports.down = function(knex, Promise){
    return knex.schema.table("cohort", function(cohort){
        cohort.dropColumn("lead_instructor_id");
    });
};
