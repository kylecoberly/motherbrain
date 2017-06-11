var {Model} = require("objection");

class Standard extends Model {
    static get tableName(){
        return "standards";
    }
    static get standardsJoin(){
        return ["subjects", "subjects.id", "standards.subject_id"];
    }
    static get columns(){
        return ["standards.id", "description", "success_criteria", "subjects.name AS subject"];
    }
    static getOne(id){
        return this.query()
            .select(this.columns)
            .from("standards")
            .innerJoin(...this.standardsJoin)
            .where("standards.id", id)
            .first();
    }
    static getAll(){
        return this.query()
            .select(this.columns)
            .from("standards")
            .innerJoin(...this.standardsJoin);
    }
}
Standard.knex(require("../../database/learn_connection"));

module.exports = Standard;
