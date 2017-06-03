exports.up = function(knex, Promise) {
    return knex.schema.createTable("subjects", function(subjects){
        subjects.increments();
        subjects.string("name");
        subjects.timestamp("created_at");
        subjects.timestamp("updated_at");
    }).then(() => {
        return knex.schema.createTable("standards", function(standards){
            standards.increments();
            standards.string("description");
            standards.string("success_criteria");
            standards.integer("subject_id").references("id").inTable("subjects");
            standards.timestamp("created_at");
            standards.timestamp("updated_at");
            standards.string("uuid");
            standards.integer("repo_id");
            standards.string("file_path");
        });  
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("standards").then(() => {
        return knex.schema.dropTableIfExists("subjects");
    });
};

