var {Model} = require("objection");

class Enrollment extends Model {
    static get tableName(){
        return "enrollments";
    }
    static get columns(){
        return [
            "id",
            "user_id",
            "cohort_id"
        ];
    }
    static getAll(){
        return this.query()
            .select(this.columns);
    }
    static getOne(id){
        return this.query()
            .select(this.columns)
            .where("id", id)
            .first();
    }
    static byCohort(id) {
        return this.query()
            .pluck("user_id")
            .where("cohort_id", id);
    }
}
Enrollment.knex(require("../../database/learn_connection"));

module.exports = Enrollment;
