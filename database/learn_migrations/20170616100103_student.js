exports.up = function(knex, Promise){
    return knex.schema.createTable("users", function(students){
        students.increments();
        students.string("first_name");
        students.string("last_name");
        students.string("email");
        students.timestamp("created_at");
        students.timestamp("updated_at");
        students.string("github_username");
        students.string("github_id");
        students.integer("role");
        students.string("phone");
        students.string("twitter");
        students.string("blog");
        students.string("address_1");
        students.string("address_2");
        students.string("city");
        students.string("state");
        students.string("zip_code");
        students.string("linkedin");
        students.string("avatar");
        students.string("shirt_size");
        students.integer("status");
        students.string("pivotal_tracker_token");
        students.string("auth_token");
        students.string("password_digest");
        students.integer("galvanize_id");
        students.jsonb("preferences");
    });  
};

exports.down = function(knex, Promise){
    return knex.schema.dropTableIfExists("users");
};
