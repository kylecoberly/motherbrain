var {Model} = require("objection");

var Enrollment = require("./Enrollment");

class Student extends Model {
    static get tableName(){
        return "users";
    }
    static get columns(){
        return [
            "id",
            "first_name",
            "last_name",
            "email",
            "phone",
            "github_username AS github",
            "twitter",
            "linkedin",
            "avatar",
            "galvanize_id"
        ];
    }
    static getAll(){
        return this.query()
            .select(this.columns)
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
    static getByCohort(id) {
        return Enrollment.byCohort(id)
            .then(studentIds => this.getSome(studentIds))
            .catch(console.error);
    }
}
Student.knex(require("../../database/learn_connection"));

module.exports = Student;
