var {Model} = require("objection");

class Performance extends Model {
    static get tableName(){
        return "performances";
    }
    static get columns(){
        return [
            "id",
            "user_id",
            "standard_id",
            "score",
            "updator_id"
        ];
    }
    static getAll(){
        return this.query()
            .select(this.columns)
            .from(this.tableName);
    }
    static getOne(id){
        return this.query()
            .select(this.columns)
            .from(this.tableName)
            .where("id", id)
            .first();
    }
}
Performance.knex(require("../../database/learn_connection"));

module.exports = Performance;
