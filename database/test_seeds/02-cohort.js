exports.seed = function(knex, Promise){
    return knex.schema.raw("TRUNCATE TABLE \"cohort\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("cohort").insert([{
                "learn-id": 1,
                "business-unit-id": 1
            },{
                "learn-id": 2,
                "business-unit-id": 1
            },{
                "learn-id": 3,
                "business-unit-id": 2
            }]);
        });
};
