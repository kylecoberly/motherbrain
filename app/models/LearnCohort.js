var {Model} = require("objection");
var deserializeLearnCohort = require("./deserializers/learn-cohort");

class LearnCohort extends Model {
    static get tableName(){
        return "cohorts";
    }
}
LearnCohort.knex(require("../../database/learn_connection"));

module.exports = LearnCohort;
