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
    static addRelations(query){
        // return query.eager(
        //     "[cohorts.[learnCohort(learnCohortColumns)], instructors(instructorColumns)]",
        //     {
        //         learnCohortColumns: builder => builder.select(LearnCohort.columns),
        //         instructorColumns: builder => builder.select(Instructor.columns)
        //     }
        // ).then(businessUnits => {
        //     return businessUnits.map(businessUnit => {
        //         businessUnit.cohorts = businessUnit.cohorts
        //             .map(flattenProperty.bind(null, "learnCohort"))
        //             .map(require("./deserializers/learn-cohort"));
        //         businessUnit.instructors = businessUnit.instructors
        //             .map(require("./deserializers/instructor"));
        //         return businessUnit;
        //     });
        // });
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
            },
            // Need to do an eager query to get instructor, test relations should be in place
            leadInstructor: {
                relation: Model.BelongsToOneRelation,
                modelClass: `${__dirname}/Instructor`,
                join: {
                    from: "cohort.lead_instructor_id",
                    to: "instructor.id"
                }
            }
        }
    }
}
LocalCohort.knex(require("../../database/connection"));

module.exports = LocalCohort;
