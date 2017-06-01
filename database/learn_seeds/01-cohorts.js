exports.seed = function(knex, Promise){
    return knex.schema.raw("TRUNCATE TABLE \"cohorts\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("cohorts").insert([{
                name: "g1",
                created_at: "2017-01-01 01:01:01.111111",
                updated_at: "2017-01-01 01:01:01.111111",
                start_date: "2017-01-01",
                end_date: "2017-07-01",
                label: "g1 Denver WDI"
            },{
                name: "g2",
                created_at: "2017-02-01 01:01:01.111111",
                updated_at: "2017-02-01 01:01:01.111111",
                start_date: "2017-02-01",
                end_date: "2017-08-01",
                label: "g2 Denver WDI"
            },{
                name: "g3",
                created_at: "2017-03-01 01:01:01.111111",
                updated_at: "2017-03-01 01:01:01.111111",
                start_date: "2017-03-01",
                end_date: "2017-09-01",
                label: "g3 Denver WDI"
            }]);
        });
};
