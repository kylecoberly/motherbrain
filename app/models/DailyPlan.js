var {Model} = require("objection");
var deserializeDailyPlan = require("./deserializers/daily-plan");

class DailyPlan extends Model {
    static get tableName(){
        return "daily_plans";
    }
    static get columns(){
        return [
            "id",
            "cohort_id",
            "date",
            "description",
            "title"
        ];
    }
    static getAll(){
        return this.query()
            .select(this.columns)
            .then(deserializeDailyPlan)
    }
    static getOne(id){
        return this.query()
            .select(this.columns)
            .where("id", id)
            .first()
            .then(deserializeDailyPlan);
    }
}
DailyPlan.knex(require("../../database/learn_connection"));

module.exports = DailyPlan;
