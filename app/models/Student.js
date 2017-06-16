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
            "galvanize_id"
        ];
    }
    static getAll(){
        return this.query()
            .select(this.columns)
            .from("users");
    }
    static getOne(id){
        return this.query()
            .select(this.columns)
            .from("users")
            .where("id", id)
            .first();
    }
}
Student.knex(require("../../database/learn_connection"));

module.exports = Student;
