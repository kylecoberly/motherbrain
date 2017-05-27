exports.up = function(knex, Promise) {
    return knex.schema.createTable("business-unit", function(businessUnit){
        businessUnit.increments();
        businessUnit.string("label");
        businessUnit.string("city");
        businessUnit.string("state");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("business-unit");
};
