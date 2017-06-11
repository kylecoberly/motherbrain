var {Model} = require("objection");
Model.knex(require("../../database/connection"));

class BusinessUnit extends Model {
    static get tableName(){
        return "business_unit";
    }
    static get columns(){
        return ["id", "label", "city", "state"]
    }
    static getOne(id){
        return this.query()
            .select(this.columns)
            .where("id", id)
            .first();
    }
    static getAll(){
        return this.query().select(this.columns);
    }
    static get relationMappings(){
        return {
            cohorts: {
                relation: Model.hasManyRelation,
                modelClass: `${__dirname}/LocalCohort`,
                join: {
                    from: "business_unit.id",
                    to: "cohort.id"
                }
            }
        }
    }
}
BusinessUnit.knex(require("../../database/connection"));

module.exports = BusinessUnit;
