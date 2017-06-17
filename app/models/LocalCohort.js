var {Model} = require("objection");

class LocalCohort extends Model {
    static get tableName(){
        return "cohort";
    }
    static get columns(){
        return ["id", "business_unit_id", "learn_id"];
    }
    static getOne(id){
        return this.query()
            .select(this.columns)
            .where("id", id)
            .first();
    }
    static getSome(ids){
        return this.query()
            .select(this.columns)
            .whereIn("id", ids);
    }
    static getAll(){
        return this.query()
            .select(this.columns)
    }
    static get relationMappings(){
        return {
            learnCohort: {
                relation: Model.BelongsToOneRelation,
                modelClass: `${__dirname}/LearnCohort`,
                join: {
                    from: "cohort.learn_id",
                    to: "cohorts.id"
                }
            }
        }
    }
}
LocalCohort.knex(require("../../database/connection"));

module.exports = LocalCohort;
