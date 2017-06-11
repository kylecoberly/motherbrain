exports.seed = function(knex, Promise){
    return knex.schema.raw("TRUNCATE TABLE \"cohort\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("cohort").insert([{
                "learn_id": 32,
                "business_unit_id": 1
            },{
                "learn_id": 37,
                "business_unit_id": 1
            },{
                "learn_id": 66,
                "business_unit_id": 1
            },{
                "learn_id": 70,
                "business_unit_id": 1
            },{
                "learn_id": 73,
                "business_unit_id": 1
            },{
                "learn_id": 74,
                "business_unit_id": 1
            },{
                "learn_id": 89,
                "business_unit_id": 1
            },{
                "learn_id": 94,
                "business_unit_id": 1
            },{
                "learn_id": 103,
                "business_unit_id": 1
            },{
                "learn_id": 117,
                "business_unit_id": 1
            },{
                "learn_id": 149,
                "business_unit_id": 1
            },{
                "learn_id": 184,
                "business_unit_id": 1
            }]);
        });
};
