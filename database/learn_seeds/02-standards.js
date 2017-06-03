exports.seed = function(knex, Promise){
    return knex.schema.raw("TRUNCATE TABLE \"subjects\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("subjects").insert([{
                name: "Subject 1",
                created_at: "2017-01-01 01:01:01.111111",
                updated_at: "2017-01-01 01:01:01.111111"
            },{
                name: "Subject 2",
                created_at: "2017-01-01 01:01:01.111111",
                updated_at: "2017-01-01 01:01:01.111111"
            }]);
        }).then(() => {
            return knex.schema.raw("TRUNCATE TABLE \"standards\" RESTART IDENTITY CASCADE")
            .then(function(){
                return knex("standards").insert([{
                    description: "Description 1",
                    success_criteria: "Success Criteria 1",
                    subject_id: 1,
                    created_at: "2017-01-01 01:01:01.111111",
                    updated_at: "2017-01-01 01:01:01.111111"
                },{
                    description: "Description 2",
                    success_criteria: "Success Criteria 2",
                    subject_id: 2,
                    created_at: "2017-01-01 01:01:01.111111",
                    updated_at: "2017-01-01 01:01:01.111111"
                }]);
            });
        });
};

