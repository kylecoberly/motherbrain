var {Model} = require("objection");

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
}
Student.knex(require("../../database/learn_connection"));

module.exports = Student;
