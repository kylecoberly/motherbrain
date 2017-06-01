exports.seed = function(knex, Promise){
    return knex.schema.raw("TRUNCATE TABLE \"cohort\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("cohort").insert([{
                "learn-id": 32,
                "business-unit-id": 1
            },{
                "learn-id": 37,
                "business-unit-id": 1
            },{
                "learn-id": 66,
                "business-unit-id": 1
            },{
                "learn-id": 70,
                "business-unit-id": 1
            },{
                "learn-id": 73,
                "business-unit-id": 1
            },{
                "learn-id": 74,
                "business-unit-id": 1
            },{
                "learn-id": 89,
                "business-unit-id": 1
            },{
                "learn-id": 94,
                "business-unit-id": 1
            },{
                "learn-id": 103,
                "business-unit-id": 1
            },{
                "learn-id": 117,
                "business-unit-id": 1
            },{
                "learn-id": 149,
                "business-unit-id": 1
            },{
                "learn-id": 184,
                "business-unit-id": 1
            }]);
        });
};
