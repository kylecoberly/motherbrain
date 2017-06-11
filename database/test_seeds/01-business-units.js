exports.seed = function(knex, Promise){
    return knex.schema.raw("TRUNCATE TABLE \"business_unit\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("business_unit").insert([{
                label: "Denver WDI",
                city: "Denver",
                state: "Colorado"
            },{
                label: "Miami WDI",
                city: "Miami",
                state: "Florida"
            }]);
        });
};
