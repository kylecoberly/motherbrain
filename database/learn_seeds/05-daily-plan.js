exports.seed = function(knex, Promise){
    return knex.schema.raw("TRUNCATE TABLE \"daily_plans\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("daily_plans").insert([{
                cohort_id: 1,
                date: "2017-03-15",
                description: "Description",
                title: "Title"
            },{
                id: 2,
                cohort_id: 2,
                date: "2018-03-15",
                description: "Description",
                title: "Title"
            }]);
        });
};
