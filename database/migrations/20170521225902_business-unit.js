exports.up = function(knex, Promise) {
    return knex.schema.createTable("business_unit", function(businessUnit){
        businessUnit.increments();
        businessUnit.string("label");
        businessUnit.string("city");
        businessUnit.string("state");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("business_unit");
};
