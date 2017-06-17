var {Model} = require("objection");
var deserializeInstructor = require("./deserializers/instructor");

class Instructor extends Model {
    static get tableName(){
        return "instructor";
    }
    static get columns(){
        return [
            "id",
            "first_name",
            "last_name",
            "title",
            "start_date",
            "description",
            "avatar"
        ];
    }
    static getAll(){
        return this.query()
            .select(this.columns)
            .then(deserializeInstructor);
    }
    static getOne(id){
        return this.query()
            .select(this.columns)
            .where("id", id)
            .first()
            .then(deserializeInstructor);
    }
    static get relationMappings(){
        return {
            businessUnit: {
                relation: Model.BelongsToOneRelation,
                modelClass: `${__dirname}/BusinessUnit`,
                join: {
                    from: "instructor.business_unit_id",
                    to: "business_unit.id"
                }
            }
        }
    }
}
Instructor.knex(require("../../database/connection"));

module.exports = Instructor;
