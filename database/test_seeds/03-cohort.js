exports.seed = function(knex, Promise){
    return knex.schema.raw("TRUNCATE TABLE \"cohort\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("cohort").insert([{
                "learn_id": 1,
                "business_unit_id": 1,
                "lead_instructor_id": 1
            },{
                "learn_id": 2,
                "business_unit_id": 1,
                "lead_instructor_id": 1
            },{
                "learn_id": 3,
                "business_unit_id": 2,
                "lead_instructor_id": 2
            }]);
        });
};
