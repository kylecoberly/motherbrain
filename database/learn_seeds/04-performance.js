exports.seed = function(knex, Promise){
    return knex.schema.raw("TRUNCATE TABLE \"performances\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("performances").insert([{
                user_id: 1,
                standard_id: 1,
                score: 1,
                updator_id: 2
            },{
                user_id: 2,
                standard_id: 2,
                score: 2,
                updator_id: 1
            }]);
        });
};

