exports.up = function(knex, Promise) {
    return knex.schema.createTable("instructor", function(instructor){
        instructor.increments();
        instructor.string("first_name");
        instructor.string("last_name");
        instructor.string("title");
        instructor.date("start_date");
        instructor.text("description");
        instructor.string("avatar");
        instructor.integer("business_unit_id").references("id").inTable("business_unit");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("instructor");
};
