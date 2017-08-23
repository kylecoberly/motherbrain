var LearnCohort = require("./LearnCohort");
var LocalCohort = require("./LocalCohort");
var {Model} = require("objection");
var {find, map} = require("lodash");
var deserializeLearnCohort = require("./deserializers/learn-cohort");

class Cohort extends Model {
    static getOne(id){
        return LocalCohort.getOneByLearnId(id)
        .then(localCohort => {
            return LearnCohort.getOne(localCohort.learn_id)
            .then(deserializeLearnCohort)
            .then(combine.bind(null, localCohort));
        }).catch(console.error);
    }
    static getSome(ids){
        return LocalCohort.getSome(ids)
        .then(localCohorts => {
            var learnCohortIds = map(localCohorts, "learn_id");
            return LearnCohort.getSome(learnCohortIds)
            .then(deserializeLearnCohort)
            .then(combineCohorts.bind(null, localCohorts));
        }).catch(console.error);
    }
    static getOneByBusinessUnit(businessUnitId){
        return LocalCohort.query()
            .pluck("id")
            .where("business_unit_id", businessUnitId)
        .then(this.getSome.bind(this))
        .catch(console.error);
    }
}

function combineCohorts(localCohorts, learnCohorts){
    return localCohorts.map(localCohort => {
        return combine(
            localCohort,
            find(learnCohorts, ["id", localCohort.learn_id])
        );
    });
}

function combine(...objects){
    return Object.assign({}, ...objects);
}

module.exports = Cohort;
