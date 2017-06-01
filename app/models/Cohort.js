var LearnCohort = require("./LearnCohort");
var {Model} = require("objection");
var deserializeLearnCohort = require("./deserializers/learn-cohort");

class Cohort extends Model {
    static get tableName(){
        return "cohort";
    }
    static getLocalCohort(cohortId){
        return this.query()
            .select("id", "business-unit-id", "learn-id")
            .where("id", cohortId)
            .first();
    }
    static getLearnCohort(databaseConnection, cohortId){
        return databaseConnection.query()
            .select("name", "start_date", "end_date")
            .where("id", cohortId)
            .first();
    }
    static getCohort(cohortId){
        return this.getLocalCohort.call(this, cohortId).then(localData => {
            return this.getLearnCohort(LearnCohort, localData["learn-id"])
            .then(deserializeLearnCohort)
            .then(learnData => Object.assign({}, localData, learnData));
        }).catch(console.error);
    }
    static getCohortByBusinessUnit(businessUnitId){
        return this.query()
            .pluck("id")
            .where("business-unit-id", businessUnitId)
        .then(cohortIds => {
            return Promise.all(cohortIds.map(this.getCohort.bind(this)))
        }).catch(console.error);
    }
}
Cohort.knex(require("../../database/connection"));

module.exports = Cohort;
