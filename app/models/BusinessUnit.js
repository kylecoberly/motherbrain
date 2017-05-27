var {Model} = require("objection");
var JSONAPISerializer = require("./serializers/business-unit");
Model.knex(require("../../database/connection"));

class BusinessUnit extends Model {
    static get tableName(){
        return "business-unit";
    }
    static get jsonschema(){
        id: {type: integer}
        label: {type: string}
        city: {type: string}
        state: {type: string}
    }
}

module.exports = BusinessUnit;
