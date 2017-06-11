exports.seed = function(knex, Promise){
    return knex.schema.raw("TRUNCATE TABLE \"business_unit\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("business_unit").insert([{
                label: "Denver WDI",
                city: "Denver",
                state: "Colorado"
            },{
                label: "Boulder WDI",
                city: "Boulder",
                state: "Colorado"
            },{
                label: "Seattle WDI",
                city: "Seattle",
                state: "Washington"
            },{
                label: "San Francisco WDI",
                city: "San Francisco",
                state: "California"
            },{
                label: "Phoenix WDI",
                city: "Phoenix",
                state: "Arizona"
            },{
                label: "Austin WDI",
                city: "Austin",
                state: "Texas"
            },{
                label: "New York WDI",
                city: "New York City",
                state: "New York"
            }]);
        });
};
