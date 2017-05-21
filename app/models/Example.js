var {Model} = require("objection");
Model.knex(require("../../database/connection"));

class Example extends Model {
    static get tableName(){
        return "example";
    },
    static get jsonSchema(){
        id: {type: integer}
    },
    static get relationMappings(){
        return {
            otherModel: {
                relationship: Model.hasManyRelation,
                modelClass: `${__dirname}/example`,
                join: {
                    from: "Example.id",
                    to: "Example.id"
                }
            }
        };
    }
}

module.exports = Example;
