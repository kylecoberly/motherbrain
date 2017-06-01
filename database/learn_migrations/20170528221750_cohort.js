exports.up = function(knex, Promise) {
    return knex.schema.createTable("cohorts", function(cohorts){
        cohorts.increments();
        cohorts.string("name");
        cohorts.timestamp("created_at");
        cohorts.timestamp("updated_at");
        cohorts.date("start_date");
        cohorts.date("end_date");
        cohorts.string("label");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("cohorts");
};
