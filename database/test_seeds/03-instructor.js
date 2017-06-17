exports.seed = function(knex, Promise){
    return knex.schema.raw("TRUNCATE TABLE \"instructor\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("instructor").insert([{
                first_name: "Kyle",
                last_name: "Coberly",
                title: "Faculty Director",
                start_date: "2017-03-15",
                description: "Description",
                avatar: "www.google.com",
                business_unit_id: 1
            },{
                first_name: "Danny",
                last_name: "Fritz",
                title: "Faculty Director",
                start_date: "2018-03-15",
                description: "Description",
                avatar: "www.google.com",
                business_unit_id: 1
            }]);
        });
};

