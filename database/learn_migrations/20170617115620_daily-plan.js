exports.up = function(knex, Promise){
    return knex.schema.createTable("daily_plans", function(dailyPlans){
        dailyPlans.increments();
        dailyPlans.integer("cohort_id").references("id").inTable("cohorts");
        dailyPlans.date("date");
        dailyPlans.text("description");
        dailyPlans.string("title");
        dailyPlans.timestamp("created_at");
        dailyPlans.timestamp("updated_at");
    });  
};

exports.down = function(knex, Promise){
    return knex.schema.dropTableIfExists("daily_plans");
};
