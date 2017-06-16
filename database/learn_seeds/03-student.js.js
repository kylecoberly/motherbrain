exports.seed = function(knex, Promise){
    return knex.schema.raw("TRUNCATE TABLE \"users\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("users").insert([{
                first_name: "Kyle",
                last_name: "Coberly",
                email: "kyle.coberly@gmail.com",
                twitter: "kylecoberly",
                phone: "777-777-7777",
                github_username: "kylecoberly",
                linkedin: "kylecoberly",
                galvanize_id: 1,
                avatar: "https://www.google.com"
            },{
                first_name: "Danny",
                last_name: "Fritz",
                email: "danny.fritz@gmail.com",
                twitter: "dannyfritz",
                phone: "777-777-7777",
                github_username: "dannyfritz",
                linkedin: "dannyfritz",
                galvanize_id: 2,
                avatar: "https://www.google.com"
            }]);
        });
};
