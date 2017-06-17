exports.up = function(knex, Promise){
    return knex.schema.createTable("performances", function(students){
        students.increments();
        students.integer("user_id").references("id").inTable("users");
        students.integer("standard_id").references("id").inTable("standards");
        students.integer("updator_id").references("id").inTable("users");
        students.integer("score");
    });  
};

exports.down = function(knex, Promise){
    return knex.schema.dropTableIfExists("performances");
};

