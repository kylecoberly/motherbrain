exports.seed = function(knex, Promise){
    return knex.schema.raw("TRUNCATE TABLE \"enrollments\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("enrollments").insert([{
                created_at: "2017-01-01 01:01:01.111111",
                updated_at: "2017-01-01 01:01:01.111111",
                user_id: 1,
                cohort_id: 1
            },{
                created_at: "2017-01-01 01:01:01.111111",
                updated_at: "2017-01-01 01:01:01.111111",
                user_id: 1,
                cohort_id: 2
            },{
                created_at: "2017-01-01 01:01:01.111111",
                updated_at: "2017-01-01 01:01:01.111111",
                user_id: 2,
                cohort_id: 1
            }]);
        });
};
