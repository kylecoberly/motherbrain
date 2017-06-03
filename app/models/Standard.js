var LearnCohort = require("./LearnCohort");
var {Model} = require("objection");

class Standard extends Model {
    static get tableName(){
        return "standards";
    }
}
Standard.knex(require("../../database/learn_connection"));

module.exports = Standard;
